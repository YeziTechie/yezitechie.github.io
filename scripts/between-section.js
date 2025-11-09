document.addEventListener('DOMContentLoaded', () => {
  const background = document.createElement('div');
  background.id = 'background-layer';
  document.body.appendChild(background);

  const sections = document.querySelectorAll('.between-section');
  sections.forEach((section, i) => {
    const clone = section.querySelector('h1').cloneNode(true);
    clone.dataset.index = i;
    background.appendChild(clone);
  });

  const bgTexts = background.querySelectorAll('h1');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const index = [...sections].indexOf(entry.target);
      if (index === -1) return;

      const h1 = bgTexts[index];
      if (entry.intersectionRatio > 0.5) {
        h1.classList.add('active');
      } else {
        h1.classList.remove('active');
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(s => observer.observe(s));
});
