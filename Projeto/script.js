const menuNavBar =
  document.querySelector(
    '.menu-navbar',
  );

const navbar =
  document.querySelector('.navbar');

const closeMenuNavBar =
  document.querySelector(
    '.close-menu-nav-bar',
  );

menuNavBar.addEventListener(
  'click',
  () =>
    navbar.classList.toggle('active'),
);

closeMenuNavBar.addEventListener(
  'click',
  () =>
    navbar.classList.remove('active'),
);
