// Import modules
import * as header from './modules/header.js';
import writeFooter from './modules/footer.js';

// Get Html elements
let nav = document.getElementById('nav-container');
let ft = document.getElementById('ft-container');

// Set initial language in localStorage
let lang = localStorage.getItem('language');
if (!lang) {
  localStorage.setItem('language', 'sr_SR');
}

// Function for initial rendering of header and footer
async function initData() {
  return fetch('db/db.json')
    .then(res => res.json())
    .then(data => {
      lang = localStorage.getItem('language')
      nav.innerHTML = header.writeHeader(data[`${lang}`]);
      ft.innerHTML = writeFooter(data[`${lang}`]);
    })
};

// Inner content to html elements
await initData();

// On-click loading and rendering header, footer, etc.
async function getData() {
  return fetch('db/db.json')
    .then(res => res.json())
    .then(data => {
      lang = localStorage.getItem('language')
      header.writeHeaderTitles(data[`${lang}`])
      ft.innerHTML = writeFooter(data[`${lang}`]);
      // ovde mogu biti dodate slične funkcije za ispis headera i main-a
    })
};

const srOption = document.getElementById('sr');
const enOption = document.getElementById('en');

srOption.addEventListener('click', () => {
  lang = localStorage.setItem('language', 'sr_SR');
  getData();
});
enOption.addEventListener('click', () => {
  lang = localStorage.setItem('language', 'en_EN');
  getData();
});

// Change Navbar background on scroll
header.navbarBackgroundScroll();
