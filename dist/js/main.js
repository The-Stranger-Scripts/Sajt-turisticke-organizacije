// Import modules
import Nav from './modules/header.js';
import Ft from './modules/footer.js';

// Get Html elements
let nav = document.getElementById('nav-container');
let ft = document.getElementById('ft-container');

// Inner content to html elements
nav.innerHTML = Nav;
ft.innerHTML = Ft;

// Ovde se mogu dodati neke opste funkcionalnosti sajta

// Promena Navbar backgroud-a na scroll
let prevScrollpos = window.pageYOffset;
let navbarElement = document.querySelector('.navbar');

if (window.matchMedia('(max-width: 960px)').matches) {
  navbarElement.classList.add('bg-nav-white-transparent');
} else {
  navbarElement.classList.add('bg-nav-white-gradient');
}

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos && window.pageYOffset < 114) {
    if (window.matchMedia('(max-width: 960px)').matches) {
      navbarElement.classList.remove('bg-nav-white-gradient');
      navbarElement.classList.add('bg-nav-white-transparent');
    } else {
      navbarElement.classList.add('bg-nav-white-gradient');
      navbarElement.classList.remove('bg-nav-white-transparent');
      navbarElement.classList.add('pb-lg-5');
      navbarElement.classList.remove('pb-lg-1');
    }
  } else {
    navbarElement.classList.remove('bg-nav-white-gradient');
    navbarElement.classList.remove('pb-lg-5');
    navbarElement.classList.add('bg-nav-white-transparent');
    navbarElement.classList.add('pb-lg-1');
  }
  prevScrollpos = currentScrollPos;
};
