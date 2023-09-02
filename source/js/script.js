// // бургер меню

// var navMain = document.querySelector('.page-header__nav');
// var navToggle = document.querySelector('.page-header__toggle');

// navMain.classList.remove('page-header__nav--nojs');

// navToggle.addEventListener('click', function () {
//   if (navMain.classList.contains('page-header__nav--closed')) {
//     navMain.classList.remove('page-header__nav--closed');
//     navMain.classList.add('page-header__nav--opened');
//   } else {
//     navMain.classList.add('page-header__nav--closed');
//     navMain.classList.remove('page-header__nav--opened');
//   }
// });

const icons = document.querySelectorAll('.icon');
const navMain = document.querySelector('.header-list');
const navToggle = document.querySelector('.header-container__burger');

icons.forEach (icon => {
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});



navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('closed')) {
      navMain.classList.remove('closed');
      navMain.classList.add('opened');
    } else {
      navMain.classList.add('closed');
      navMain.classList.remove('opened');
    }
  });
