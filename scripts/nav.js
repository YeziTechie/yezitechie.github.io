const anchor = document.querySelector('.anchor-btn');
const phoneNav = document.querySelector('.phone-nav');
const chain = document.querySelector('.chain');
const nav = document.querySelector('nav');
const bh = document.querySelector('.behind-nav');

anchor.addEventListener('click', () => {
  anchor.classList.toggle('active');
  phoneNav.classList.toggle('active');
  chain.classList.toggle('active');
  nav.classList.toggle('active');
   bh.classList.toggle('active');
});
