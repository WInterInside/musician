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

var playtoggle1 = document.querySelector('.latter__toggle1');

playtoggle1.classList.add('latter__toggle--play');

playtoggle1.addEventListener('click', function() {
    if (playtoggle1.classList.contains('latter__toggle--play')) {
    playtoggle1.classList.remove('latter__toggle--play');
    playtoggle1.classList.add('latter__toggle--pause');
  } else {
    playtoggle1.classList.remove('latter__toggle--pause');
    playtoggle1.classList.add('latter__toggle--play');
  }
});

var playtoggle2 = document.querySelector('.latter__toggle2');

playtoggle2.classList.add('latter__toggle--play');

playtoggle2.addEventListener('click', function() {
    if (playtoggle2.classList.contains('latter__toggle--play')) {
    playtoggle2.classList.remove('latter__toggle--play');
    playtoggle2.classList.add('latter__toggle--pause');
  } else {
    playtoggle2.classList.remove('latter__toggle--pause');
    playtoggle2.classList.add('latter__toggle--play');
  }
});

var playtoggle3 = document.querySelector('.latter__toggle3');

playtoggle3.classList.add('latter__toggle--play');

playtoggle3.addEventListener('click', function() {
    if (playtoggle3.classList.contains('latter__toggle--play')) {
    playtoggle3.classList.remove('latter__toggle--play');
    playtoggle3.classList.add('latter__toggle--pause');
  } else {
    playtoggle3.classList.remove('latter__toggle--pause');
    playtoggle3.classList.add('latter__toggle--play');
  }
});
