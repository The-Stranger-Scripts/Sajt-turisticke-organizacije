// Import modules
import * as header from './modules/header.js';
import writeFooter from './modules/footer.js';

// Get Html elements
let nav = document.getElementById('nav-container');
let ft = document.getElementById('ft-container');

// Set initial language in localStorage
let lang = localStorage.getItem('language');
if (!lang) {
  lang = localStorage.setItem('language', 'sr_SR');
}


nav.innerHTML = header.nav;
// ft.innerHTML = writeFooter(data);

// Prebačeno iz functions.js
async function getData(lang) {
  return fetch('db/db.json')
    .then(res => res.json())
    .then(data => {
      lang = localStorage.getItem('language')
      console.log(lang);
      ft.innerHTML = writeFooter(data[`${lang}`])
      // ovde mogu biti dodate slične funkcije za ispis headera i main-a
    })
};

// Inner content to html elements
await getData(lang);

// Get btns
// Ovo ce morati da se sredi kada se napravi dinamicki
// ispis navigacije, jer nece moci da nadje btn elemente
// pre nego sto ih kreira.
// ->
const srOption = document.getElementById('sr');
const enOption = document.getElementById('en');

srOption.addEventListener('click', () => {
  lang = localStorage.setItem('language', 'sr_SR');
  getData(lang);
});
enOption.addEventListener('click', () => {
  lang = localStorage.setItem('language', 'en_EN');
  getData(lang);
});
// <- ovaj block

// Promena Navbar background-a na scroll
header.navbarBackgroundScroll();
