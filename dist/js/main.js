// Import modules
import * as header from './modules/header.js';
import writeFooter from './modules/footer.js';

// Get Html elements
let nav = document.getElementById('nav-container');
let ft = document.getElementById('ft-container');

// Set initial language in localStorage
let lang = localStorage.getItem('language');
if (!lang) {
  localStorage.setItem('language', 'en_EN');
  lang = localStorage.getItem('language');
}

let srOption;
let x;

function getty() {
  fetch('db/db.json')
    .then(res => res.json())
    .then(data => {
      lang = localStorage.getItem('language');
      nav.innerHTML = header.writeHeader(data[`${lang}`]);
      header.navbarBackgroundScroll();
      ft.innerHTML = writeFooter(data[`${lang}`]);
      
    });
    srOption = document.getElementById('sr');
    x = 33;
}

getty();
console.log(srOption, x);

// await initGetData();

// nav.innerHTML = header.writeFooter(lang);
// ft.innerHTML = writeFooter(data);

// Prebačeno iz functions.js
// async function getData(lang) {
//   return fetch('db/db.json')
//     .then(res => res.json())
//     .then(data => {
//       lang = localStorage.getItem('language');

//       // header.writeHeaderTitles(data[`${lang}`])
//       // nav.innerHTML = header.writeHeader(data[`${lang}`]);
//       ft.innerHTML = writeFooter(data[`${lang}`]);

//       // header.navbarBackgroundScroll();
//       // getButtons();

//       // ovde mogu biti dodate slične funkcije za ispis headera i main-a
//     })
// };

// Inner content to html elements
// await getData(lang);

// Promena Navbar background-a na scroll
// header.navbarBackgroundScroll();

// Get btns
// Ovo ce morati da se sredi kada se napravi dinamicki
// ispis navigacije, jer nece moci da nadje btn elemente
// pre nego sto ih kreira.
// ->

// document.getElementById('sr').addEventListener('click', () => {
//   localStorage.setItem('language', 'sr_SR');
//   // getData();
//   console.log('sss')
// });
// document.getElementById('en').addEventListener('click', () => {
//   localStorage.setItem('language', 'en_EN');
//   // getData();

//   console.log('adsd')
// });

// srOption.addEventListener('click', () => {
//   lang = localStorage.setItem('language', 'se_SR');
//   getData(lang);
//   console.log('asdewq')
// })
// enOption.addEventListener('click', () => {
//   lang = localStorage.setItem('language', 'en_EN');
//   getData(lang);
//   console.log('1234332')
// })
// <- ovaj block
