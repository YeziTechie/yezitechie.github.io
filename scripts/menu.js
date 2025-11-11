document.querySelectorAll('.yacht-holder').forEach((el, i) => {
  const delay = i * 0.7; // adjust spacing between waves
  el.style.animationDelay = `${delay}s`;

  const yacht = el.querySelector('.yacht');
  if (yacht) yacht.style.animationDelay = `${delay + 1}s`;
});
