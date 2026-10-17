// JP Corps scroll world.
// A procedural 3D city the camera flies through as the page scrolls.
// Every section of the page is a "stop" on the path with its own landmark.
import {
  WebGLRenderer, Scene, Color, Fog, PerspectiveCamera, HemisphereLight, DirectionalLight,
  PlaneGeometry, MeshLambertMaterial, MeshBasicMaterial, Mesh, GridHelper, BoxGeometry,
  InstancedMesh, Object3D, CatmullRomCurve3, Vector3, CircleGeometry, RingGeometry,
  VideoTexture, TextureLoader, SRGBColorSpace, TorusGeometry, CanvasTexture, BufferGeometry,
  Float32BufferAttribute, Points, PointsMaterial, DoubleSide, Group, MathUtils,
} from 'three';

const C = {
  bg: '#f3f3f4', ink: '#2a1077', red: '#e8463f', lav: '#e9e5f7', lav2: '#d9d2f0', white: '#ffffff',
};

// Deterministic randomness so the city looks the same on every visit.
function rng(seed) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function webglAvailable() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
  } catch (e) { return false; }
}

function discTexture({ title, sub, bg, fg, accent }) {
  const s = 512;
  const cv = document.createElement('canvas');
  cv.width = cv.height = s;
  const g = cv.getContext('2d');
  g.fillStyle = bg;
  g.beginPath(); g.arc(s / 2, s / 2, s / 2, 0, Math.PI * 2); g.fill();
  g.fillStyle = fg;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.font = '700 46px Poppins, "Segoe UI", sans-serif';
  // wrap title into at most three lines
  const words = title.split(' ');
  const lines = [];
  let line = '';
  for (const w of words) {
    const test = line ? line + ' ' + w : w;
    if (g.measureText(test).width > s * 0.68 && line) { lines.push(line); line = w; } else line = test;
  }
  lines.push(line);
  const lh = 54;
  const y0 = s / 2 - ((lines.length - 1) * lh) / 2 - (sub ? 22 : 0);
  lines.forEach((l, i) => g.fillText(l, s / 2, y0 + i * lh));
  if (sub) {
    g.fillStyle = accent;
    g.font = '600 34px Inter, "Segoe UI", sans-serif';
    g.fillText(sub, s / 2, y0 + lines.length * lh + 18);
  }
  const tex = new CanvasTexture(cv);
  tex.colorSpace = SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

function numberTexture(n) {
  const cv = document.createElement('canvas');
  cv.width = cv.height = 256;
  const g = cv.getContext('2d');
  g.fillStyle = C.white;
  g.fillRect(0, 0, 256, 256);
  g.fillStyle = C.red;
  g.font = '800 170px Poppins, "Segoe UI", sans-serif';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText(String(n), 128, 140);
  const tex = new CanvasTexture(cv);
  tex.colorSpace = SRGBColorSpace;
  return tex;
}

export function startWorld() {
  const canvas = document.getElementById('world');
  const root = document.documentElement;
  if (!canvas || !webglAvailable()) { root.classList.add('no-webgl'); return null; }

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const small = matchMedia('(max-width: 760px)').matches;

  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: !small, powerPreference: 'high-performance' });
  } catch (e) { root.classList.add('no-webgl'); return null; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, small ? 1.5 : 1.75));
  renderer.setSize(innerWidth, innerHeight, false);

  const scene = new Scene();
  scene.background = new Color(C.bg);
  scene.fog = new Fog(C.bg, 26, 150);

  const camera = new PerspectiveCamera(small ? 66 : 55, innerWidth / innerHeight, 0.1, 600);

  scene.add(new HemisphereLight(0xffffff, new Color(C.lav2), 1.6));
  const sun = new DirectionalLight(0xffffff, 1.5);
  sun.position.set(40, 80, 30);
  scene.add(sun);

  // ---- the path ------------------------------------------------------------
  const curve = new CatmullRomCurve3([
    new Vector3(0, 7, 34),
    new Vector3(0, 6, 4),
    new Vector3(12, 8, -34),
    new Vector3(-4, 10, -74),
    new Vector3(10, 8, -112),
    new Vector3(-2, 12, -150),
    new Vector3(0, 22, -186),
  ], false, 'catmullrom', 0.4);

  const pathSamples = curve.getSpacedPoints(240);
  const nearPath = (x, z, r) => pathSamples.some((p) => (p.x - x) ** 2 + (p.z - z) ** 2 < r * r);

  // stops: the scroll position of each section maps to a point on the path
  const stops = [...document.querySelectorAll('[data-stop]')];
  const stopT = stops.map((_, i) => (stops.length > 1 ? i / (stops.length - 1) : 0));

  const frameAt = (t) => {
    const p = curve.getPointAt(MathUtils.clamp(t, 0, 1));
    const tan = curve.getTangentAt(MathUtils.clamp(t, 0, 1)).normalize();
    const side = new Vector3().crossVectors(tan, new Vector3(0, 1, 0)).normalize();
    return { p, tan, side };
  };
  const ahead = (t, forward, sideways, up = 0) => {
    const { p, tan, side } = frameAt(t);
    return p.clone().addScaledVector(tan, forward).addScaledVector(side, sideways).add(new Vector3(0, up, 0));
  };

  // ---- ground --------------------------------------------------------------
  const ground = new Mesh(new PlaneGeometry(900, 900), new MeshLambertMaterial({ color: C.white }));
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(0, 0, -80);
  scene.add(ground);
  const grid = new GridHelper(900, 180, C.ink, C.ink);
  grid.material.transparent = true;
  grid.material.opacity = 0.07;
  grid.position.set(0, 0.02, -80);
  scene.add(grid);

  // ---- landmarks (kept clear of the city) -------------------------------
  const landmarks = [];
  const keepClear = [];
  const clear = (v, r) => keepClear.push({ x: v.x, z: v.z, r });
  // keep the line of sight from a stop to its landmark free of buildings
  const clearSight = (t, target, r = 7) => {
    const from = curve.getPointAt(t);
    for (let k = 0; k <= 8; k++) clear(from.clone().lerp(target, k / 8), r);
  };
  const billboards = []; // objects that turn to face the camera
  const bobbers = [];

  // Stop 0: the hero video on a giant disc, split by two lines
  {
    const t = stopT[0];
    const pos = ahead(t, 40, small ? 0 : 12, 1);
    const g = new Group();
    g.position.copy(pos);
    const video = document.getElementById('world-video');
    const mat = new MeshBasicMaterial({ color: 0xffffff, fog: false, toneMapped: false });
    // show the poster until the clip really plays, then switch to the live video
    new TextureLoader().load('assets/hero-poster.jpg', (tex) => {
      tex.colorSpace = SRGBColorSpace;
      if (!mat.userData.live) { mat.map = tex; mat.needsUpdate = true; }
    });
    if (video) {
      const useVideo = () => {
        if (mat.userData.live) return;
        const vt = new VideoTexture(video);
        vt.colorSpace = SRGBColorSpace;
        mat.map = vt;
        mat.userData.live = true;
        mat.needsUpdate = true;
      };
      if (!video.paused && video.readyState >= 2) useVideo();
      else video.addEventListener('playing', useVideo, { once: true });
    }
    const disc = new Mesh(new CircleGeometry(7.5, 96), mat);
    g.add(disc);
    const ring = new Mesh(new RingGeometry(7.7, 7.85, 96), new MeshBasicMaterial({ color: C.ink, fog: false }));
    g.add(ring);
    const dot = new Mesh(new CircleGeometry(2.6, 64), new MeshBasicMaterial({ color: C.red, fog: false }));
    dot.position.set(6.2, -5.4, -0.2);
    g.add(dot);
    const lineMat = new MeshBasicMaterial({ color: C.ink, fog: false });
    [-2.2, 3.4].forEach((x) => {
      const l = new Mesh(new BoxGeometry(0.07, 22, 0.07), lineMat);
      l.position.set(x, 0, 0.12);
      g.add(l);
    });
    scene.add(g);
    billboards.push(g);
    clear(pos, 16);
    clear(curve.getPointAt(0), 20);
    clearSight(t, pos, 9);
  }

  // Stop 1: three service towers
  {
    const t = stopT[1];
    const base = ahead(t, 32, small ? 0 : 11);
    const towers = [
      { h: 13, color: C.ink, dx: -4.5 },
      { h: 18, color: C.lav2, dx: 0, cap: C.red },
      { h: 10, color: C.white, dx: 4.5, cap: C.ink },
    ];
    towers.forEach((tw) => {
      const m = new Mesh(new BoxGeometry(3.2, tw.h, 3.2), new MeshLambertMaterial({ color: tw.color }));
      m.position.set(base.x + tw.dx, tw.h / 2, base.z);
      scene.add(m);
      if (tw.cap) {
        const cap = new Mesh(new BoxGeometry(3.4, 1, 3.4), new MeshLambertMaterial({ color: tw.cap }));
        cap.position.set(base.x + tw.dx, tw.h + 0.5, base.z);
        scene.add(cap);
      }
    });
    clear(base, 12);
    clearSight(t, base);
  }

  // Stop 2: floating project discs (built from the work list in the page)
  const projectDiscs = [];
  {
    const t = stopT[2];
    const items = [...document.querySelectorAll('.work-list li')];
    const centre = ahead(t, 34, small ? 0 : -11, 2);
    const cols = 3;
    items.forEach((li, i) => {
      const r = i % cols;
      const row = Math.floor(i / cols);
      const ink = i % 2 === 0;
      const tex = discTexture({
        title: li.dataset.name || li.textContent.trim(),
        sub: li.dataset.year || '',
        bg: ink ? C.ink : C.lav,
        fg: ink ? C.white : C.ink,
        accent: C.red,
      });
      const m = new Mesh(new CircleGeometry(2.4, 64), new MeshBasicMaterial({ map: tex, transparent: true, fog: false }));
      const { side } = frameAt(t);
      m.position.copy(centre)
        .addScaledVector(side, (r - 1) * 5.4)
        .add(new Vector3(0, (0.5 - row) * 5.4, 0));
      m.userData = { tags: (li.dataset.tags || '').split(' '), baseY: m.position.y, phase: i * 0.9 };
      scene.add(m);
      billboards.push(m);
      bobbers.push(m);
      projectDiscs.push(m);
    });
    clear(centre, 14);
    clearSight(t, centre);
  }

  // Stop 3: a staircase of four steps
  {
    const t = stopT[3];
    const { tan, side } = frameAt(t);
    const start = ahead(t, 32, small ? -5 : 2);
    for (let i = 0; i < 4; i++) {
      const h = 2.2 * (i + 1);
      const p = start.clone().addScaledVector(side, i * 3.6).addScaledVector(tan, i * 1.5);
      const step = new Mesh(new BoxGeometry(3.4, h, 3.4), new MeshLambertMaterial({ color: i === 3 ? C.red : (i % 2 ? C.lav2 : C.white) }));
      step.position.set(p.x, h / 2, p.z);
      scene.add(step);
      const label = new Mesh(new PlaneGeometry(1.8, 1.8), new MeshBasicMaterial({ map: numberTexture(i + 1), fog: false }));
      label.position.set(p.x, h + 1.8, p.z);
      scene.add(label);
      billboards.push(label);
      clear(p, 6);
      clearSight(t, p, 6);
    }
  }

  // Stop 4: a cluster of rings turning slowly
  const spinners = [];
  {
    const t = stopT[4];
    const centre = ahead(t, 32, small ? 0 : -10, 2);
    const defs = [
      { r: 4.2, c: C.ink, o: [0, 0, 0] },
      { r: 2.6, c: C.red, o: [3.5, 2.5, 1] },
      { r: 1.8, c: C.ink, o: [-3.8, -2.2, -1] },
      { r: 1.2, c: C.red, o: [-2.5, 3.4, 0.5] },
      { r: 3.0, c: C.lav2, o: [2.2, -3.2, -1.5] },
    ];
    defs.forEach((d, i) => {
      const m = new Mesh(new TorusGeometry(d.r, 0.16, 16, 96), new MeshLambertMaterial({ color: d.c }));
      m.position.set(centre.x + d.o[0], centre.y + d.o[1], centre.z + d.o[2]);
      m.rotation.set(i * 0.7, i * 1.1, 0);
      m.userData.speed = 0.15 + i * 0.05;
      scene.add(m);
      spinners.push(m);
    });
    clear(centre, 12);
    clearSight(t, centre);
  }

  // Stop 5: the red sun at the end of the road
  {
    const t = stopT[stopT.length - 1];
    const pos = ahead(t, 70, 0, 8);
    const sunDisc = new Mesh(new CircleGeometry(16, 128), new MeshBasicMaterial({ color: C.red, fog: false }));
    sunDisc.position.copy(pos);
    scene.add(sunDisc);
    billboards.push(sunDisc);
    const halo = new Mesh(new RingGeometry(17.5, 17.8, 128), new MeshBasicMaterial({ color: C.ink, fog: false, side: DoubleSide }));
    halo.position.copy(pos);
    scene.add(halo);
    billboards.push(halo);
  }

  // ---- gates: red rings the camera flies through between stops ----------
  for (let i = 1; i < stopT.length; i++) {
    const t = (stopT[i - 1] + stopT[i]) / 2;
    const p = curve.getPointAt(t);
    const tan = curve.getTangentAt(t);
    const gate = new Mesh(new TorusGeometry(4.6, 0.12, 12, 96), new MeshLambertMaterial({ color: C.red }));
    gate.position.copy(p);
    gate.lookAt(p.clone().add(tan));
    scene.add(gate);
  }

  // ---- the city -------------------------------------------------------------
  {
    const rand = rng(20261017);
    const count = small ? 320 : 760;
    const box = new BoxGeometry(1, 1, 1);
    box.translate(0, 0.5, 0);
    const city = new InstancedMesh(box, new MeshLambertMaterial({ color: 0xffffff }), count);
    const dummy = new Object3D();
    const palette = [C.white, C.white, C.white, C.lav, C.lav, C.lav2];
    const col = new Color();
    let placed = 0;
    let tries = 0;
    while (placed < count && tries < count * 20) {
      tries++;
      const x = (rand() - 0.5) * 190;
      const z = 50 - rand() * 300;
      if (nearPath(x, z, 9)) continue;
      if (keepClear.some((k) => (k.x - x) ** 2 + (k.z - z) ** 2 < k.r * k.r)) continue;
      const w = 2 + rand() * 4;
      const d = 2 + rand() * 4;
      const h = 1 + rand() ** 2.2 * 22;
      dummy.position.set(x, 0, z);
      dummy.scale.set(w, h, d);
      dummy.rotation.y = rand() < 0.2 ? Math.PI / 4 : 0;
      dummy.updateMatrix();
      city.setMatrixAt(placed, dummy.matrix);
      const r = rand();
      col.set(r < 0.07 ? C.ink : r < 0.1 ? C.red : palette[Math.floor(rand() * palette.length)]);
      city.setColorAt(placed, col);
      placed++;
    }
    city.count = placed;
    city.instanceMatrix.needsUpdate = true;
    if (city.instanceColor) city.instanceColor.needsUpdate = true;
    scene.add(city);
  }

  // ---- drifting particles ----------------------------------------------------
  {
    const rand = rng(7);
    const n = small ? 350 : 900;
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      pos[i * 3] = (rand() - 0.5) * 160;
      pos[i * 3 + 1] = 2 + rand() * 40;
      pos[i * 3 + 2] = 40 - rand() * 280;
    }
    const geo = new BufferGeometry();
    geo.setAttribute('position', new Float32BufferAttribute(pos, 3));
    const pts = new Points(geo, new PointsMaterial({ color: C.ink, size: 0.18, transparent: true, opacity: 0.35 }));
    scene.add(pts);
  }

  // ---- scroll → path position ----------------------------------------------
  let tops = [];
  const measure = () => { tops = stops.map((s) => s.offsetTop); };
  const targetT = () => {
    const y = scrollY + innerHeight * 0.35;
    if (!tops.length) return 0;
    if (y <= tops[0]) return stopT[0];
    for (let i = 0; i < tops.length - 1; i++) {
      if (y < tops[i + 1]) {
        const f = (y - tops[i]) / Math.max(1, tops[i + 1] - tops[i]);
        return MathUtils.lerp(stopT[i], stopT[i + 1], MathUtils.smoothstep(f, 0.15, 0.95));
      }
    }
    // last section: ease into the end of the road
    const last = tops.length - 1;
    const maxY = document.documentElement.scrollHeight - innerHeight * 0.65;
    const f = MathUtils.clamp((y - tops[last]) / Math.max(1, maxY - tops[last]), 0, 1);
    return MathUtils.lerp(stopT[last], 1, f) || stopT[last];
  };

  measure();
  let t = targetT();
  const pointer = { x: 0, y: 0, sx: 0, sy: 0 };
  addEventListener('pointermove', (e) => {
    pointer.x = (e.clientX / innerWidth) * 2 - 1;
    pointer.y = (e.clientY / innerHeight) * 2 - 1;
  }, { passive: true });

  const onResize = () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight, false);
    measure();
  };
  addEventListener('resize', onResize);
  addEventListener('load', measure);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);

  // ---- public hooks for the page ---------------------------------------------
  const api = {
    highlight(tag) {
      projectDiscs.forEach((m) => {
        m.material.opacity = !tag || m.userData.tags.includes(tag) ? 1 : 0.18;
      });
    },
    progress: () => t,
  };

  // ---- loop --------------------------------------------------------------------
  const look = new Vector3();
  const camPos = new Vector3();
  let last = performance.now();
  let running = true;
  document.addEventListener('visibilitychange', () => {
    running = !document.hidden;
    if (running) { last = performance.now(); requestAnimationFrame(frame); }
  });

  function frame(now) {
    if (!running) return;
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    const goal = targetT();
    t = reduce ? goal : t + (goal - t) * (1 - Math.pow(0.0025, dt));
    pointer.sx += (pointer.x - pointer.sx) * 0.05;
    pointer.sy += (pointer.y - pointer.sy) * 0.05;

    const { p, tan, side } = frameAt(t);
    camPos.copy(p).addScaledVector(side, pointer.sx * 0.9).add(new Vector3(0, -pointer.sy * 0.6, 0));
    camera.position.copy(camPos);
    look.copy(p).addScaledVector(tan, 20).add(new Vector3(0, -1.5, 0));
    camera.lookAt(look);

    const time = now / 1000;
    if (!reduce) {
      bobbers.forEach((m) => { m.position.y = m.userData.baseY + Math.sin(time * 0.9 + m.userData.phase) * 0.35; });
      spinners.forEach((m) => { m.rotation.x += dt * m.userData.speed; m.rotation.y += dt * m.userData.speed * 0.7; });
    }
    billboards.forEach((o) => o.lookAt(camera.position));

    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
  root.classList.add('has-world');
  return api;
}

let started = false;
const go = () => {
  if (started) return;
  started = true;
  window.jpWorld = startWorld();
  window.dispatchEvent(new CustomEvent('jpworld:ready'));
};
const fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
Promise.race([fontsReady, new Promise((r) => setTimeout(r, 1500))]).then(go);
