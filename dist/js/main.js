// Import modules
import * as header from './modules/header.js';
import Ft from './modules/footer.js';

// Get Html elements
let nav = document.getElementById('nav-container');
let ft = document.getElementById('ft-container');

// Inner content to html elements
nav.innerHTML = header.nav;
ft.innerHTML = Ft;

// Ovde se mogu dodati neke opste funkcionalnosti sajta

// Promena Navbar background-a na scroll
header.navbarBackgroundScroll();