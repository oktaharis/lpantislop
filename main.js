(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const root = document.documentElement;
  root.classList.add('js');

  /* Once the page content covers the flight, calm the flight overlay. */
  const after = $('.after');
  const track = $('.sw-track');
  let tick = false;
  const onScroll = () => {
    tick = false;
    // The engine's track is one screen longer than the flight itself.
    root.classList.toggle('flight-done', track && scrollY >= track.offsetHeight - innerHeight);
    root.classList.toggle('past-world', after.getBoundingClientRect().top < innerHeight * 0.6);
  };
  addEventListener('scroll', () => { if (!tick) { tick = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  /* Blocks rise in as they arrive. */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  $$('.block').forEach((el) => io.observe(el));

  /* Services: hover reads, click highlights the matching work. */
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
        return;
      }
      b.setAttribute('aria-pressed', 'true');
      const tag = b.dataset.filter;
      let n = 0;
      $$('.work-list li').forEach((li) => { if (li.dataset.tags.split(' ').includes(tag)) { li.classList.add('match'); n++; } });
      list.classList.add('filtering');
      note.textContent = `Menyorot ${n} proyek untuk ${b.textContent.toLowerCase()}. Klik lagi untuk semua.`;
      if (window.lenis) window.lenis.scrollTo('#karya', { offset: -70, duration: 1.2 });
      else $('#karya').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    });
  });
})();
