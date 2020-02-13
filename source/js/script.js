var menu = document.querySelector('.header__menu');
var nav = document.querySelector('.site-nav');

menu.classList.remove('header__menu--nojs');
menu.classList.add('header__menu--off');
nav.classList.remove('site-nav--nojs');
nav.classList.add('site-nav--closed');

menu.addEventListener('click', function() {
    if (nav.classList.contains('site-nav--closed')) {
    nav.classList.remove('site-nav--closed');
    nav.classList.add('site-nav--opened');
    menu.classList.add('header__menu--on');
    menu.classList.remove('header__menu--off');
  } else {
    nav.classList.remove('site-nav--opened');
    nav.classList.add('site-nav--closed');
    menu.classList.remove('header__menu--on');
    menu.classList.add('header__menu--off');
  }
});
