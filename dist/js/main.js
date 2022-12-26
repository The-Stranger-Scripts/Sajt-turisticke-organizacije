// Import modules
import * as header from './modules/header.js';
import writeFooter from './modules/footer.js';

// Get Html elements
let nav = document.getElementById('nav-container');
let ft = document.getElementById('ft-container');

// Inner content to html elements
let db = await getData();

nav.innerHTML = header.nav;
ft.innerHTML = writeFooter(db.en_EN);

// Prebačeno iz functions.js
async function getData() {
  return fetch('db/db.json').then(response => {
    return response.json();
  });
}


// Ovde se mogu dodati neke opste funkcionalnosti sajta
const srOption = document.getElementById('sr');
const enOption = document.getElementById('en');

srOption.addEventListener('click', () => {
  ft.innerHTML = writeFooter(db.sr_SR);
  // ovde mogu biti dodate slične funkcije za ispis headera i main-a 
});
enOption.addEventListener('click', () => {
  ft.innerHTML = writeFooter(db.en_EN);
});



// Promena Navbar background-a na scroll
header.navbarBackgroundScroll();

