(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* Fit a wordmark to the width of its container (desktop: one line). */
  function fit(el) {
    const span = el.firstElementChild;
    if (matchMedia('(max-width: 760px)').matches) { el.style.fontSize = ''; return; }
    const target = el.parentElement.clientWidth - parseFloat(getComputedStyle(el.parentElement).paddingLeft) * 2;
    el.style.fontSize = '100px';
    const w = span.offsetWidth;
    el.style.fontSize = Math.floor((100 * target) / w) + 'px';
  }
  const wm = $('#wordmark'), fm = $('#footmark');
  const refit = () => { fit(wm); fit(fm); };
  refit();
  addEventListener('resize', refit);

  /* Zoom keeps you on the same section: remember where we are, restore after a resize. */
  const panels = $$('main > header, main > section, .foot');
  let anchor = { el: panels[0], frac: 0 };
  const track = () => {
    const mid = innerHeight / 2;
    for (const el of panels) {
      const r = el.getBoundingClientRect();
      if (r.top <= mid && r.bottom > mid) { anchor = { el, frac: (mid - r.top) / r.height }; return; }
    }
  };
  let trackTick = false;
  addEventListener('scroll', () => { if (!trackTick) { trackTick = true; requestAnimationFrame(() => { trackTick = false; track(); }); } }, { passive: true });
  track();
  let lastW = innerWidth;
  addEventListener('resize', () => {
    if (innerWidth === lastW && innerHeight === window.__lastH) return;
    lastW = innerWidth; window.__lastH = innerHeight;
    requestAnimationFrame(() => {
      const r = anchor.el.getBoundingClientRect();
      const y = scrollY + r.top + anchor.frac * r.height - innerHeight / 2;
      scrollTo({ top: Math.max(0, y), behavior: 'instant' });
    });
  });
  window.__lastH = innerHeight;
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refit);

  /* Hero video: keep the photo if the clip is missing; stay still for reduced motion. */
  const hv = $('.hero-video');
  if (hv) {
    const srcs = $$('source', hv);
    const drop = () => { hv.remove(); };
    srcs[srcs.length - 1].addEventListener('error', drop);
    hv.muted = true;
    const start = () => { const p = hv.play(); if (p && p.catch) p.catch(() => {}); };
    start();
    ['pointerdown', 'touchstart', 'keydown', 'scroll'].forEach((ev) =>
      addEventListener(ev, function once() { if (hv.paused) start(); removeEventListener(ev, once); }, { passive: true }));
    document.addEventListener('visibilitychange', () => { if (!document.hidden && hv.paused) start(); });
  }

  /* Signature move: the wordmark scales with scroll (travel under 8%). */
  if (!reduce) {
    const hero = $('#top');
    const foot = $('.foot');
    let ticking = false;
    const update = () => {
      ticking = false;
      const vh = innerHeight;
      const p = Math.min(1, Math.max(0, scrollY / (vh * 0.9)));
      wm.style.transform = `scale(${(1 - 0.07 * p).toFixed(4)})`;
      const fr = foot.getBoundingClientRect();
      const q = Math.min(1, Math.max(0, 1 - fr.top / vh));
      fm.style.transform = `scale(${(0.94 + 0.06 * q).toFixed(4)})`;
    };
    addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  }

  /* Staggered entrances: heading, then text, then pictures. */
  const targets = [
    ['.services .section-title', 0], ['.group', 80], ['.desc', 160],
    ['.work-title', 0], ['.work-head .underlined', 80], ['.work-note', 120], ['.row figure', 70],
    ['.step-line', 0], ['.steps p', 90],
    ['.faq-title', 0], ['details', 70],
    ['.contact-line', 0], ['.email', 90], ['.foot-cols ul', 70],
  ];
  targets.forEach(([sel, step]) => {
    $$(sel).forEach((el, i) => {
      el.setAttribute('data-reveal', '');
      el.style.setProperty('--d', (sel === '.group' || sel === '.row figure' || sel === 'details' || sel === '.foot-cols ul' ? i * step : step) + 'ms');
    });
  });
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  $$('[data-reveal]').forEach((el) => io.observe(el));

  /* The live thing: hover a service to read it, click a group to light up its projects. */
  const desc = $('#desc');
  const defaultDesc = desc.textContent;
  $$('.group li').forEach((li) => {
    li.tabIndex = 0;
    const show = () => { desc.textContent = li.dataset.desc; };
    const hide = () => { desc.textContent = defaultDesc; };
    li.addEventListener('mouseenter', show);
    li.addEventListener('focus', show);
    li.addEventListener('mouseleave', hide);
    li.addEventListener('blur', hide);
  });

  const wall = $('.wall');
  const note = $('#work-note');
  const baseNote = note.textContent;
  const buttons = $$('.group-name');
  buttons.forEach((b) => {
    b.setAttribute('aria-pressed', 'false');
    b.addEventListener('click', () => {
      const on = b.getAttribute('aria-pressed') !== 'true';
      buttons.forEach((x) => x.setAttribute('aria-pressed', 'false'));
      $$('.wall figure').forEach((f) => f.classList.remove('match'));
      if (!on) { wall.classList.remove('filtering'); note.textContent = baseNote; return; }
      b.setAttribute('aria-pressed', 'true');
      const tag = b.dataset.filter;
      let n = 0;
      $$('.wall figure').forEach((f) => { if (f.dataset.tags.split(' ').includes(tag)) { f.classList.add('match'); n++; } });
      wall.classList.add('filtering');
      note.textContent = `Menyorot ${n} proyek untuk ${b.textContent.toLowerCase()}. Klik lagi untuk menampilkan semua.`;
      $('#karya').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    });
  });
})();
