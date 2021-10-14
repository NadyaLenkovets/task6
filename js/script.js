// ============  main-header__burger  ============ 
// ============  навигация по страницам  ============ 

const mainHeaderBurger = document.querySelector('.main-header__burger');
const headerNav = document.querySelector('.main-nav');
const headerNavLinks = document.querySelectorAll('.main-nav__link');

mainHeaderBurger.addEventListener('click', function(e) {
   document.body.classList.toggle('lock');
   headerNav.classList.toggle('active');
   mainHeaderBurger.classList.toggle('active');
})

headerNavLinks.forEach(headerNavLink => {
   headerNavLink.addEventListener('click', onHeaderNavLinkClick);
})

function onHeaderNavLinkClick() {
   if (headerBurger.classList.contains('active')) {
      document.body.classList.remove('lock');
      headerNav.classList.remove('active');
      mainHeaderBurger.classList.remove('active');
   }
}



// ============  rating  ============ 

let ratingValue = document.querySelector('.rating__value');
const ratingItems = document.querySelectorAll('.star');

ratingItems.forEach(ratingItem => {
   ratingItem.addEventListener('click', onRatingItemClick);
});

function onRatingItemClick() {
   ratingItems.forEach(ratingItem => {
      ratingItem.classList.remove('selected');
   })

   ratingValue.innerHTML = this.getAttribute('data-star') + '.0';

   this.classList.add('selected');
   for (let i = 0; i < this.getAttribute('data-star'); i++) {
      ratingItems[i].classList.add('selected');
   };
}