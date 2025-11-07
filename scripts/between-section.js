 (function(){
    const sections = document.querySelectorAll('.between-section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // When the SECTION's center area is visible, mark it active.
        if (entry.intersectionRatio > 0.5) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, {
      threshold: [0, 0.25, 0.5, 0.75, 1], // use 0.5 as the main trigger
      root: null
    });

    sections.forEach(s => observer.observe(s));
  })();