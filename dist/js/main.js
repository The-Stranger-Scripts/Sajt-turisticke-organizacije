// Import modules
import * as header from './modules/header.js';
import writeFooter from './modules/footer.js';
import writeHome from './modules/home.js';
// ! importovati module za svaku stranicu

// Get Html elements
let nav = document.getElementById('nav-container');
let ft = document.getElementById('ft-container');
let main = document.getElementById('main');

// Set initial language in localStorage
let lang = localStorage.getItem('language');
if (!lang) {
  localStorage.setItem('language', 'sr_SR');
}

// Get queryString location of page
let location = () => {
  let queryArr = window.location.href.split('/');
  return queryArr[queryArr.length - 1];
};

let initialLoad = true;
let initialLangLoad = true;
// let srOption, enOption;

// Function for initial rendering of header and footer
async function initData() {
  return fetch('db/db.json')
    .then(res => res.json())
    .then(data => {
      lang = localStorage.getItem('language')
      if(initialLoad) {
        nav.innerHTML = header.writeHeader(data[`${lang}`]);
        initialLoad = false;
      } else {
        header.writeHeaderTitles(data[`${lang}`]);
      }
      
      // Ispis main-a u zavisnostio od lokacije
      switch (location()) {
        case '':
          main.innerHTML = writeHome(data[`${lang}`]);
          break;
          case 'index.html':
            main.innerHTML = writeHome(data[`${lang}`]);
            break;
            // Odkomentarisati case za koji se uradi neki kontent u odg. JS-u
            // case 'accomondation.html':
            //   main.innerHTML = writeAccomondation(data[`${lang}`]);
            //   break;
            // case 'eat-drink.html':
            //   main.innerHTML = writeEatDrink(data[`${lang}`]);
            //   break;
            // case 'events.html':
            //   main.innerHTML = writeEvents(data[`${lang}`]);
        //   break;
        // case 'explore.html':
        //   main.innerHTML = writeExplore(data[`${lang}`]);
        //   break;
        
        default:
          break;
        }
        
        ft.innerHTML = writeFooter(data[`${lang}`]);
      }).then(() => {
        let srOption, enOption;

        if(initialLangLoad) {
          if(window.matchMedia('(max-width: 960px)').matches) {
            srOption = document.getElementById('srSmallDisplay');
            enOption = document.getElementById('enSmallDisplay');
          } else {
            srOption = document.getElementById('srLargeDisplay');
            enOption = document.getElementById('enLargeDisplay');
        }
        initialLangLoad = false;
      }

      srOption.addEventListener('click', () => {
        lang = localStorage.setItem('language', 'sr_SR');
        initData();
      });
      enOption.addEventListener('click', () => {
        lang = localStorage.setItem('language', 'en_EN');
        initData();
      });
      header.navbarBackgroundScroll();
      
      window.onresize = () => {
        if(window.innerWidth < 960) {
          srOption = document.getElementById('srSmallDisplay');
          enOption = document.getElementById('enSmallDisplay');
        } else {
          srOption = document.getElementById('srLargeDisplay');
          enOption = document.getElementById('enLargeDisplay');
        }

        srOption.addEventListener('click', () => {
          lang = localStorage.setItem('language', 'sr_SR');
          initData();
        });
        enOption.addEventListener('click', () => {
          lang = localStorage.setItem('language', 'en_EN');
          initData();
        });
        header.navbarBackgroundScroll();
      }
    })
};

// Inner content to html elements
await initData();
