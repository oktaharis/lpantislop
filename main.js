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
    const w = span.getBoundingClientRect().width;
    el.style.fontSize = Math.floor((100 * target) / w) + 'px';
  }
  const wm = $('#wordmark'), fm = $('#footmark');
  const refit = () => { fit(wm); fit(fm); };
  refit();
  addEventListener('resize', refit);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refit);

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
