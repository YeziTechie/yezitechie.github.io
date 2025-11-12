document.querySelectorAll('.yacht-img').forEach((el) => {
  const delay = Math.random() * 2 + 1; // random number between 1 and 3
  el.style.animationDelay = `${delay}s`;

  const yacht = el.querySelector('img');
  if (yacht) {
    const yachtDelay = Math.random() * 2 + 1; // also random 1–3s for inner image
    yacht.style.animationDelay = `${yachtDelay}s`;
  }
});
