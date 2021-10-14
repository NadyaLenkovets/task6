// ============  бургер-меню  ============ 

const burger = document.querySelector('.header__burger-menu');
const burgerClose = document.querySelector('.header-close');
const nav = document.querySelector('.header__inner');
const navLinks = document.querySelectorAll('.header__nav-link');

burger.addEventListener('click', function(e) {
   document.body.classList.add('lock');
   nav.classList.add('active');
   burger.classList.add('active');
})
burgerClose.addEventListener('click', function(e) {
   document.body.classList.remove('lock');
   nav.classList.remove('active');
   burger.classList.remove('active');
})

navLinks.forEach(navLink => {
   navLink.addEventListener('click', onNavLinkClick);
})

function onNavLinkClick(e) {
   const navLink = e.target;
   if (burger.classList.contains('active')) {
      document.body.classList.remove('lock');
      nav.classList.remove('active');
      burger.classList.remove('active');
   }
}
