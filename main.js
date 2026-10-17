(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Hero video feeds the 3D disc: keep it playing (muted). */
  const hv = $('#world-video');
  if (hv) {
    hv.muted = true;
    const start = () => { const p = hv.play(); if (p && p.catch) p.catch(() => {}); };
    start();
    ['pointerdown', 'touchstart', 'keydown', 'scroll'].forEach((ev) =>
      addEventListener(ev, function once() { if (hv.paused) start(); removeEventListener(ev, once); }, { passive: true }));
    document.addEventListener('visibilitychange', () => { if (!document.hidden && hv.paused) start(); });
  }

  /* Panels rise in as their stop arrives. */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  $$('.panel, .hero-copy').forEach((el) => io.observe(el));
  $$('.hero-copy > *').forEach((el, i) => el.style.setProperty('--delay', i * 110 + 'ms'));

  /* Rail: which stop are we at, and how far along the road. */
  const stops = $$('[data-stop]');
  const links = $$('.rail a');
  const fill = $('#rail-fill');
  let tick = false;
  const updateRail = () => {
    tick = false;
    const mid = scrollY + innerHeight * 0.5;
    let active = stops[0];
    stops.forEach((s) => { if (s.offsetTop <= mid) active = s; });
    links.forEach((a) => a.classList.toggle('active', a.dataset.for === active.id));
    const max = document.documentElement.scrollHeight - innerHeight;
    if (fill) fill.style.height = (max > 0 ? (scrollY / max) * 100 : 0) + '%';
  };
  addEventListener('scroll', () => { if (!tick) { tick = true; requestAnimationFrame(updateRail); } }, { passive: true });
  addEventListener('scroll', () => document.documentElement.classList.toggle('scrolled', scrollY > 40), { passive: true });
  updateRail();

  /* Zoom keeps you on the same stop: remember it, restore after a resize. */
  let anchor = { el: stops[0], frac: 0 };
  const track = () => {
    const mid = innerHeight / 2;
    for (const el of stops) {
      const r = el.getBoundingClientRect();
      if (r.top <= mid && r.bottom > mid) { anchor = { el, frac: (mid - r.top) / r.height }; return; }
    }
  };
  addEventListener('scroll', () => requestAnimationFrame(track), { passive: true });
  track();
  let lastW = innerWidth, lastH = innerHeight;
  addEventListener('resize', () => {
    if (innerWidth === lastW && innerHeight === lastH) return;
    lastW = innerWidth; lastH = innerHeight;
    requestAnimationFrame(() => {
      const r = anchor.el.getBoundingClientRect();
      scrollTo({ top: Math.max(0, scrollY + r.top + anchor.frac * r.height - innerHeight / 2), behavior: 'instant' });
    });
  });

  /* Services: hover reads, click lights up the matching work (page and world). */
  const desc = $('#desc');
  const defaultDesc = desc ? desc.textContent : '';
  $$('.group li').forEach((li) => {
    li.tabIndex = 0;
    const show = () => { if (desc) desc.textContent = li.dataset.desc; };
    const hide = () => { if (desc) desc.textContent = defaultDesc; };
    li.addEventListener('mouseenter', show);
    li.addEventListener('focus', show);
    li.addEventListener('mouseleave', hide);
    li.addEventListener('blur', hide);
  });

  const list = $('.work-list');
  const note = $('#work-note');
  const baseNote = note ? note.textContent : '';
  const buttons = $$('.group-name');
  buttons.forEach((b) => {
    b.setAttribute('aria-pressed', 'false');
    b.addEventListener('click', () => {
      const on = b.getAttribute('aria-pressed') !== 'true';
      buttons.forEach((x) => x.setAttribute('aria-pressed', 'false'));
      $$('.work-list li').forEach((li) => li.classList.remove('match'));
      if (!on) {
        list.classList.remove('filtering');
        note.textContent = baseNote;
        if (window.jpWorld) window.jpWorld.highlight(null);
        return;
      }
      b.setAttribute('aria-pressed', 'true');
      const tag = b.dataset.filter;
      let n = 0;
      $$('.work-list li').forEach((li) => { if (li.dataset.tags.split(' ').includes(tag)) { li.classList.add('match'); n++; } });
      list.classList.add('filtering');
      note.textContent = `Menyorot ${n} proyek untuk ${b.textContent.toLowerCase()}. Klik lagi untuk semua.`;
      if (window.jpWorld) window.jpWorld.highlight(tag);
      $('#karya').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    });
  });
})();
