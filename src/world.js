// JP Corps scroll world.
// A procedural 3D city the camera flies through as the page scrolls.
// Every section of the page is a "stop" on the path with its own landmark.
//
// Real assets: assets/city.exr is a CC0 HDRI from @pmndrs/assets, used as the
// environment map so glass and metal reflect a real sky. Everything else is
// generated here: facades, roads, street lights and trees.
import {
  WebGLRenderer, Scene, Color, Fog, PerspectiveCamera, HemisphereLight, DirectionalLight,
  PlaneGeometry, MeshStandardMaterial, MeshBasicMaterial, Mesh, BoxGeometry, CylinderGeometry,
  ConeGeometry, Object3D, CatmullRomCurve3, Vector3, CircleGeometry,
  RingGeometry, VideoTexture, TextureLoader, SRGBColorSpace, TorusGeometry, CanvasTexture,
  BufferGeometry, Float32BufferAttribute, Points, PointsMaterial, DoubleSide, Group, MathUtils,
  RepeatWrapping, EquirectangularReflectionMapping, ACESFilmicToneMapping,
} from 'three';
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const C = {
  bg: '#f3f3f4', ink: '#2a1077', red: '#e8463f', lav: '#e9e5f7', lav2: '#cfc6ea',
  white: '#ffffff', road: '#2f2b3d', leaf: '#b9d4c0',
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

// ---- procedural textures ---------------------------------------------------

// One tile of a building facade: floors of windows, a few of them lit.
function facadeTexture(seed) {
  const rand = rng(seed);
  const S = 256;
  const cv = document.createElement('canvas');
  cv.width = cv.height = S;
  const g = cv.getContext('2d');
  g.fillStyle = '#ffffff';
  g.fillRect(0, 0, S, S);

  const cols = 4, rows = 4;
  const cw = S / cols, ch = S / rows;
  for (let r = 0; r < rows; r++) {
    g.fillStyle = 'rgba(42,16,119,0.10)';            // slim band between floors
    g.fillRect(0, r * ch + ch * 0.86, S, ch * 0.08);
    for (let c = 0; c < cols; c++) {
      const x = c * cw + cw * 0.18;
      const y = r * ch + ch * 0.16;
      const w = cw * 0.64;
      const h = ch * 0.6;
      const roll = rand();
      if (roll < 0.06) g.fillStyle = 'rgba(232,70,63,0.85)';          // a lit window
      else if (roll < 0.14) g.fillStyle = 'rgba(42,16,119,0.78)';
      else g.fillStyle = 'rgba(42,16,119,' + (0.26 + rand() * 0.24).toFixed(3) + ')';
      g.fillRect(x, y, w, h);
      g.fillStyle = 'rgba(255,255,255,0.33)';        // glass highlight
      g.fillRect(x, y, w, h * 0.2);
    }
  }
  const tex = new CanvasTexture(cv);
  tex.colorSpace = SRGBColorSpace;
  tex.wrapS = tex.wrapT = RepeatWrapping;
  tex.anisotropy = 8;
  return tex;
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

// Rescale a box's UVs so one texture tile covers `tile` world units on every face.
function tileBoxUVs(geo, w, h, d, tile) {
  const uv = geo.attributes.uv;
  const spans = [
    [d / tile, h / tile], [d / tile, h / tile],  // +x, -x
    [w / tile, d / tile], [w / tile, d / tile],  // +y, -y
    [w / tile, h / tile], [w / tile, h / tile],  // +z, -z
  ];
  for (let f = 0; f < 6; f++) {
    const [su, sv] = spans[f];
    for (let i = f * 4; i < f * 4 + 4; i++) uv.setXY(i, uv.getX(i) * su, uv.getY(i) * sv);
  }
  uv.needsUpdate = true;
  return geo;
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
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new Scene();
  scene.background = new Color(C.bg);
  scene.fog = new Fog(C.bg, 45, 200);

  const camera = new PerspectiveCamera(small ? 66 : 55, innerWidth / innerHeight, 0.1, 700);

  scene.add(new HemisphereLight(0xffffff, new Color(C.lav2), 1.15));
  const sun = new DirectionalLight(0xffffff, 1.9);
  sun.position.set(50, 90, 40);
  scene.add(sun);
  const rim = new DirectionalLight(new Color(C.lav), 0.5);
  rim.position.set(-40, 30, -60);
  scene.add(rim);

  // Real sky reflections from the CC0 HDRI (the world still works without it).
  new EXRLoader().load('assets/city.exr', (tex) => {
    tex.mapping = EquirectangularReflectionMapping;
    scene.environment = tex;
    scene.environmentIntensity = 0.5;
  }, undefined, () => {});

  // ---- the path ------------------------------------------------------------
  const curve = new CatmullRomCurve3([
    new Vector3(0, 7, 40),
    new Vector3(0, 6, 4),
    new Vector3(12, 8, -34),
    new Vector3(-4, 10, -74),
    new Vector3(10, 8, -112),
    new Vector3(-2, 12, -150),
    new Vector3(0, 22, -186),
  ], false, 'catmullrom', 0.4);

  const pathSamples = curve.getSpacedPoints(300);
  const nearPath = (x, z, r) => pathSamples.some((p) => (p.x - x) ** 2 + (p.z - z) ** 2 < r * r);

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
  const ground = new Mesh(
    new PlaneGeometry(1000, 1000),
    new MeshStandardMaterial({ color: C.white, roughness: 0.95, metalness: 0 }),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(0, 0, -80);
  scene.add(ground);

  // ---- the road the camera flies above --------------------------------------
  {
    const half = 7;
    const n = 260;
    const pos = [], uv = [], idx = [];
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      const p = curve.getPointAt(t);
      const tan = curve.getTangentAt(t);
      const side = new Vector3().crossVectors(tan, new Vector3(0, 1, 0)).normalize();
      const l = p.clone().addScaledVector(side, -half);
      const r = p.clone().addScaledVector(side, half);
      pos.push(l.x, 0.04, l.z, r.x, 0.04, r.z);
      uv.push(0, t * 42, 1, t * 42);
      if (i < n) {
        const a = i * 2;
        idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
      }
    }
    const geo = new BufferGeometry();
    geo.setAttribute('position', new Float32BufferAttribute(pos, 3));
    geo.setAttribute('uv', new Float32BufferAttribute(uv, 2));
    geo.setIndex(idx);
    geo.computeVertexNormals();

    const cv = document.createElement('canvas');
    cv.width = cv.height = 64;
    const g = cv.getContext('2d');
    g.fillStyle = C.road; g.fillRect(0, 0, 64, 64);
    g.fillStyle = 'rgba(255,255,255,0.75)';
    g.fillRect(3, 0, 2, 64); g.fillRect(59, 0, 2, 64);     // edge lines
    g.fillStyle = 'rgba(255,255,255,0.85)';
    g.fillRect(31, 8, 2, 28);                               // dashed centre
    const tex = new CanvasTexture(cv);
    tex.colorSpace = SRGBColorSpace;
    tex.wrapS = tex.wrapT = RepeatWrapping;
    tex.anisotropy = 8;
    scene.add(new Mesh(geo, new MeshStandardMaterial({ map: tex, roughness: 0.65, metalness: 0.1 })));
  }

  // ---- landmarks (kept clear of the city) -----------------------------------
  const keepClear = [];
  const clear = (v, r) => keepClear.push({ x: v.x, z: v.z, r });
  const clearSight = (t, target, r = 7) => {
    const from = curve.getPointAt(t);
    for (let k = 0; k <= 8; k++) clear(from.clone().lerp(target, k / 8), r);
  };
  const billboards = [];
  const bobbers = [];

  // Stop 0: the hero video on a giant disc, split by two lines
  {
    const t = stopT[0];
    const pos = ahead(t, 40, small ? 0 : 12, 1);
    const g = new Group();
    g.position.copy(pos);
    const video = document.getElementById('world-video');
    const mat = new MeshBasicMaterial({ color: 0xffffff, fog: false, toneMapped: false });
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
    g.add(new Mesh(new CircleGeometry(7.5, 96), mat));
    g.add(new Mesh(new RingGeometry(7.7, 7.85, 96), new MeshBasicMaterial({ color: C.ink, fog: false })));
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
    clear(curve.getPointAt(0), 22);
    clearSight(t, pos, 9);
  }

  // Stop 1: three service towers, glass and stone
  {
    const t = stopT[1];
    const base = ahead(t, 32, small ? 0 : 11);
    const defs = [
      { h: 15, dx: -5.5, glass: true },
      { h: 22, dx: 0.5, glass: false, cap: C.red },
      { h: 11, dx: 6.5, glass: true, cap: C.ink },
    ];
    defs.forEach((tw) => {
      const w = 3.6;
      const geo = tileBoxUVs(new BoxGeometry(w, tw.h, w), w, tw.h, w, 3);
      const m = new Mesh(geo, tw.glass
        ? new MeshStandardMaterial({ color: C.lav2, roughness: 0.08, metalness: 0.9, envMapIntensity: 1.4 })
        : new MeshStandardMaterial({ map: facadeTexture(5 + tw.h), roughness: 0.75, metalness: 0.05 }));
      m.position.set(base.x + tw.dx, tw.h / 2, base.z);
      scene.add(m);
      if (tw.cap) {
        const cap = new Mesh(new BoxGeometry(w + 0.4, 0.8, w + 0.4), new MeshStandardMaterial({ color: tw.cap, roughness: 0.5 }));
        cap.position.set(base.x + tw.dx, tw.h + 0.4, base.z);
        scene.add(cap);
      }
    });
    clear(base, 13);
    clearSight(t, base);
  }

  // Stop 2: floating project discs (built from the work list in the page)
  const projectDiscs = [];
  {
    const t = stopT[2];
    const items = [...document.querySelectorAll('.work-list li')];
    const centre = ahead(t, 34, small ? 0 : -11, 2);
    const cols = 3;
    const { side } = frameAt(t);
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
      m.position.copy(centre)
        .addScaledVector(side, (r - 1) * 5.4)
        .add(new Vector3(0, (0.5 - row) * 5.4, 0));
      m.userData = { tags: (li.dataset.tags || '').split(' '), baseY: m.position.y, phase: i * 0.9 };
      scene.add(m);
      billboards.push(m);
      bobbers.push(m);
      projectDiscs.push(m);
    });
    clear(centre, 15);
    clearSight(t, centre);
  }

  // Stop 3: a staircase of four steps
  {
    const t = stopT[3];
    const { tan, side } = frameAt(t);
    const start = ahead(t, 32, small ? -5 : 2);
    for (let i = 0; i < 4; i++) {
      const h = 2.4 * (i + 1);
      const p = start.clone().addScaledVector(side, i * 3.8).addScaledVector(tan, i * 1.5);
      const step = new Mesh(
        new BoxGeometry(3.6, h, 3.6),
        new MeshStandardMaterial({
          color: i === 3 ? C.red : (i % 2 ? C.lav2 : C.white),
          roughness: i === 3 ? 0.4 : 0.55,
          metalness: i === 3 ? 0.2 : 0.1,
        }),
      );
      step.position.set(p.x, h / 2, p.z);
      scene.add(step);
      const label = new Mesh(new PlaneGeometry(1.8, 1.8), new MeshBasicMaterial({ map: numberTexture(i + 1), fog: false }));
      label.position.set(p.x, h + 1.7, p.z);
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
      const m = new Mesh(
        new TorusGeometry(d.r, 0.16, 20, 110),
        new MeshStandardMaterial({ color: d.c, roughness: 0.25, metalness: 0.65, envMapIntensity: 1.2 }),
      );
      m.position.set(centre.x + d.o[0], centre.y + d.o[1], centre.z + d.o[2]);
      m.rotation.set(i * 0.7, i * 1.1, 0);
      m.userData.speed = 0.15 + i * 0.05;
      scene.add(m);
      spinners.push(m);
    });
    clear(centre, 13);
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

  // ---- gates: red rings the camera flies through between stops ---------------
  for (let i = 1; i < stopT.length; i++) {
    const t = (stopT[i - 1] + stopT[i]) / 2;
    const p = curve.getPointAt(t);
    const tan = curve.getTangentAt(t);
    const gate = new Mesh(
      new TorusGeometry(5.4, 0.13, 14, 110),
      new MeshStandardMaterial({ color: C.red, roughness: 0.3, metalness: 0.5 }),
    );
    gate.position.copy(p);
    gate.lookAt(p.clone().add(tan));
    scene.add(gate);
  }

  // ---- the city: buildings with facades, roof plant, lights and trees -------
  {
    const rand = rng(20261017);
    const facade = [facadeTexture(11), facadeTexture(29), facadeTexture(47)];
    const stoneGeos = [[], [], []];
    const glassGeos = [], trimGeos = [], roofGeos = [];
    const o = new Object3D();

    const place = (bucket, geo, pos, rotY) => {
      o.position.copy(pos); o.rotation.set(0, rotY || 0, 0); o.scale.set(1, 1, 1);
      o.updateMatrix();
      bucket.push(geo.applyMatrix4(o.matrix));
    };

    const target = small ? 120 : 250;
    let placed = 0, tries = 0;
    while (placed < target && tries < target * 24) {
      tries++;
      const x = (rand() - 0.5) * 210;
      const z = 60 - rand() * 320;
      if (nearPath(x, z, 13)) continue;
      if (z > 10 && Math.abs(x) < 26) continue;   // keep the opening view open
      if (keepClear.some((k) => (k.x - x) ** 2 + (k.z - z) ** 2 < k.r * k.r)) continue;

      const rotY = rand() < 0.25 ? (rand() - 0.5) * 0.5 : 0;
      const glass = rand() < 0.3;
      const base = new Vector3(x, 0, z);
      const bucket = stoneGeos[Math.floor(rand() * 3)];
      let y = 0;
      let w = 4 + rand() * 5;
      let d = 4 + rand() * 5;
      const tiers = 1 + Math.floor(rand() * 3);
      for (let k = 0; k < tiers; k++) {
        const h = k === 0 ? 5 + rand() ** 1.8 * 20 : 3 + rand() * 9;
        const geo = new BoxGeometry(w, h, d);
        geo.translate(0, y + h / 2, 0);
        if (glass) {
          place(glassGeos, geo, base, rotY);
        } else {
          tileBoxUVs(geo, w, h, d, 3);
          place(bucket, geo, base, rotY);
          const band = new BoxGeometry(w + 0.25, 0.4, d + 0.25);
          band.translate(0, y + h - 0.2, 0);
          place(trimGeos, band, base, rotY);
        }
        y += h;
        w *= 0.72 + rand() * 0.12;
        d *= 0.72 + rand() * 0.12;
      }
      if (rand() < 0.7) {                               // plant room on the roof
        const rw = Math.max(1, w * 0.5);
        const box = new BoxGeometry(rw, 1.2, rw);
        box.translate(0, y + 0.6, 0);
        place(roofGeos, box, base, rotY);
      }
      if (rand() < 0.45) {                              // mast
        const mast = new CylinderGeometry(0.08, 0.14, 3 + rand() * 4, 6);
        mast.translate(0, y + 2.5, 0);
        place(roofGeos, mast, base, rotY);
      }
      placed++;
    }

    stoneGeos.forEach((bucket, i) => {
      if (!bucket.length) return;
      scene.add(new Mesh(mergeGeometries(bucket, false), new MeshStandardMaterial({
        map: facade[i], roughness: 0.78, metalness: 0.05, envMapIntensity: 0.5,
      })));
    });
    if (glassGeos.length) {
      scene.add(new Mesh(mergeGeometries(glassGeos, false), new MeshStandardMaterial({
        color: C.lav2, roughness: 0.07, metalness: 0.92, envMapIntensity: 1.5,
      })));
    }
    if (trimGeos.length) {
      scene.add(new Mesh(mergeGeometries(trimGeos, false), new MeshStandardMaterial({
        color: C.ink, roughness: 0.5, metalness: 0.25,
      })));
    }
    if (roofGeos.length) {
      scene.add(new Mesh(mergeGeometries(roofGeos, false), new MeshStandardMaterial({
        color: '#9a93b5', roughness: 0.6, metalness: 0.35,
      })));
    }

    // ---- street lights and trees along the road ----------------------------
    const poleGeos = [], headGeos = [], trunkGeos = [], leafGeos = [];
    const r2 = rng(99);
    for (let i = 8; i < 292; i += 13) {
      const t = i / 300;
      const p = curve.getPointAt(t);
      const tan = curve.getTangentAt(t);
      const side = new Vector3().crossVectors(tan, new Vector3(0, 1, 0)).normalize();
      const flip = Math.round(i / 13) % 2 === 0 ? 1 : -1;
      const foot = p.clone().addScaledVector(side, 8.2 * flip);
      foot.y = 0;

      const pole = new CylinderGeometry(0.13, 0.18, 7, 8);
      pole.translate(0, 3.5, 0);
      place(poleGeos, pole, foot);
      const arm = new BoxGeometry(1.9, 0.16, 0.16);
      arm.translate(-0.95 * flip, 6.9, 0);
      place(poleGeos, arm, foot);
      const head = new BoxGeometry(1.1, 0.26, 0.5);
      head.translate(-1.8 * flip, 6.7, 0);
      place(headGeos, head, foot);

      // a couple of trees on the far kerb, set back so they frame rather than block
      const trees = r2() < 0.6 ? 2 : 1;
      for (let n = 0; n < trees; n++) {
        const tFoot = p.clone()
          .addScaledVector(side, -(9.5 + r2() * 3) * flip)
          .addScaledVector(tan, (n - 0.5) * 5 + r2() * 2);
        tFoot.y = 0;
        const hT = 1.6 + r2() * 1.1;
        const trunk = new CylinderGeometry(0.14, 0.24, hT, 7);
        trunk.translate(0, hT / 2, 0);
        place(trunkGeos, trunk, tFoot);
        const layers = 2 + Math.floor(r2() * 2);
        for (let k = 0; k < layers; k++) {
          const rr = 1.5 - k * 0.38 + r2() * 0.22;
          const cone = new ConeGeometry(rr, 1.9, 9);
          cone.translate(0, hT + k * 0.9 + 0.8, 0);
          place(leafGeos, cone, tFoot, r2() * 3);
        }
      }
    }
    if (poleGeos.length) scene.add(new Mesh(mergeGeometries(poleGeos, false), new MeshStandardMaterial({ color: C.ink, roughness: 0.45, metalness: 0.55 })));
    if (headGeos.length) scene.add(new Mesh(mergeGeometries(headGeos, false), new MeshStandardMaterial({ color: C.red, roughness: 0.35, metalness: 0.3, emissive: new Color(C.red), emissiveIntensity: 0.3 })));
    if (trunkGeos.length) scene.add(new Mesh(mergeGeometries(trunkGeos, false), new MeshStandardMaterial({ color: '#6c5b4b', roughness: 0.9 })));
    if (leafGeos.length) scene.add(new Mesh(mergeGeometries(leafGeos, false), new MeshStandardMaterial({ color: C.leaf, roughness: 0.85, flatShading: true })));
  }

  // ---- drifting particles ----------------------------------------------------
  {
    const rand = rng(7);
    const n = small ? 320 : 800;
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      pos[i * 3] = (rand() - 0.5) * 170;
      pos[i * 3 + 1] = 2 + rand() * 44;
      pos[i * 3 + 2] = 45 - rand() * 300;
    }
    const geo = new BufferGeometry();
    geo.setAttribute('position', new Float32BufferAttribute(pos, 3));
    scene.add(new Points(geo, new PointsMaterial({ color: C.ink, size: 0.18, transparent: true, opacity: 0.3 })));
  }

  // ---- scroll to path position ----------------------------------------------
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
    billboards.forEach((b) => b.lookAt(camera.position));

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
