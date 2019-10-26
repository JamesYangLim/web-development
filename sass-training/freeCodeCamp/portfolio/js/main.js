var menuBtn = document.querySelector('.menu-btn');
var hamburger = document.querySelector('.menu-btn__burger');
var nav = document.querySelector('.nav');
var menuNav = document.querySelector('.menu-nav');
var navItems = document.querySelectorAll('.menu-nav__item');
var showMenu = false;
menuBtn.addEventListener('click', toggleMenu);
function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(function (item) { return item.classList.add('open'); });
        showMenu = true;
    }
    else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(function (item) { return item.classList.remove('open'); });
        showMenu = false;
    }
}
