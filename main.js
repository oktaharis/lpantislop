(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* Fit the footer wordmark to its container (desktop: one line). */
  const fm = $('#footmark');
  function fit(el) {
    if (matchMedia('(max-width: 900px)').matches) { el.style.fontSize = ''; return; }
    const target = el.parentElement.clientWidth;
    el.style.fontSize = '100px';
    el.style.fontSize = Math.floor((100 * target) / el.firstElementChild.offsetWidth) + 'px';
  }
  const refit = () => fit(fm);
  refit();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refit);
  addEventListener('resize', refit);

  /* Zoom keeps you on the same section: remember it, restore after a resize. */
  const panels = $$('main > header, main > section, .foot');
  let anchor = { el: panels[0], frac: 0 };
  const track = () => {
    const mid = innerHeight / 2;
    for (const el of panels) {
      const r = el.getBoundingClientRect();
      if (r.top <= mid && r.bottom > mid) { anchor = { el, frac: (mid - r.top) / r.height }; return; }
    }
  };
  let tt = false;
  addEventListener('scroll', () => { if (!tt) { tt = true; requestAnimationFrame(() => { tt = false; track(); }); } }, { passive: true });
  track();
  let lastW = innerWidth, lastH = innerHeight;
  addEventListener('resize', () => {
    if (innerWidth === lastW && innerHeight === lastH) return;
    lastW = innerWidth; lastH = innerHeight;
    requestAnimationFrame(() => {
      const r = anchor.el.getBoundingClientRect();
      const y = scrollY + r.top + anchor.frac * r.height - innerHeight / 2;
      scrollTo({ top: Math.max(0, y), behavior: 'instant' });
    });
  });

  /* Hero video: always play (muted); keep the poster if the clip is missing. */
  const hv = $('.hero-video');
  if (hv) {
    const srcs = $$('source', hv);
    srcs[srcs.length - 1].addEventListener('error', () => hv.remove());
    hv.muted = true;
    const start = () => { const p = hv.play(); if (p && p.catch) p.catch(() => {}); };
    start();
    ['pointerdown', 'touchstart', 'keydown', 'scroll'].forEach((ev) =>
      addEventListener(ev, function once() { if (hv.paused) start(); removeEventListener(ev, once); }, { passive: true }));
    document.addEventListener('visibilitychange', () => { if (!document.hidden && hv.paused) start(); });
  }

  /* Staggered entrances: heading, then text, then pictures. */
  const stagger = ['.group', '.wall figure', '.faq-list details', '.foot-cols ul', '.steps li'];
  const single = ['.hero-title', '.hero-text', '.hero .btn', '.hero-art', '.title', '.desc', '.work-note', '.contact-line', '.email'];
  single.forEach((sel, k) => $$(sel).forEach((el) => { el.setAttribute('data-reveal', ''); el.style.setProperty('--delay', (sel.startsWith('.hero') ? k * 90 : 0) + 'ms'); }));
  stagger.forEach((sel) => $$(sel).forEach((el, i) => { el.setAttribute('data-reveal', ''); el.style.setProperty('--delay', i * 80 + 'ms'); }));
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
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
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
