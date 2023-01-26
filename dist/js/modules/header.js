const writeHeader = function(data) {
  let navbarUlElements = '';
  
  data.header.nav.forEach((element, i) => {
    if(i === 0) { 
      navbarUlElements += `
        <li class="nav-item p-lg-0 py-2 ps-5 me-3 d-lg-none">
          <a class="nav-link" href="${element.link}">${element.title}</a>
        </li>
      `
    } else {
      navbarUlElements += `
        <li class="nav-item p-lg-0 py-2 ps-5 me-3">
          <a class="nav-link" href="${element.link}">${element.title}</a>
        </li>
      `
    }
    
  });

  let cityGuide = data.header.cityGuide;
  let bookTrip = data.header.bookTrip;
  let searchPlaceholder = data.header.searchPlaceholder;
  let searchButton = data.header.searchButton;

  let nav = `
              <div class="container-xxl">
                <nav class="navbar navbar-expand-lg fixed-top pt-0 pb-lg-5 pb-0">
                  <div id="nav-container" class="container-xxl px-0 ps-sm-1 pe-sm-2 pe-lg-0">
                    <a class="navbar-brand m-0 pt-1 pt-sm-0" href="index.html">
                    <img src="img/ns-logo-final-ver-transparent.svg" alt="Turistička agencija Novog Sada" class="d-inline-block align-text-top py-1 px-3 logo-img">
                    </a>
                    <button class="navbar-toggler align-self-center ms-3 mx-2 me-sm-0" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header pe-4">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">${cityGuide}</h5>

                        <div id="langBtnGroup" class="btn-group btn-group-sm mx-2 me-auto" role="group" aria-label="Basic radio toggle button group">
                          <input type="radio" class="btn-check" name="btnradio" id="srSmallDisplay" autocomplete="off" ${localStorage.getItem('language') === 'sr_SR' ? 'checked' : ''}>
                          <label class="btn btn-outline-dark" for="srSmallDisplay">SR</label>

                          <input type="radio" class="btn-check" name="btnradio" id="enSmallDisplay" autocomplete="off" ${localStorage.getItem('language') === 'en_EN' ? 'checked' : ''}>
                          <label class="btn btn-outline-dark" for="enSmallDisplay">EN</label>
                        </div>

                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body p-0">
                        <ul class="navbar-nav justify-content-lg-center align-items-lg-end flex-grow-1 px-0">
                        
                          ${navbarUlElements}

                        </ul>
                        <div class="right-bar d-flex flex-column align-items-lg-end gap-2">
                        <div class="d-none d-lg-inline text-muted small right-bar-info fw-bolder py-0 pe-3 btn-group btn-group-sm opacity-75">
                        <div class="dropdown">
                          <button class="btn btn-outline-dark dropdown-toggle border-0"
                            type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-language"></i>
                        </button>
                          <div class="dropdown-menu">
                            <li><button class="dropdown-item" id="srLargeDisplay">Srpski</button></li>
                            <li><button class="dropdown-item" id="enLargeDisplay">English</button></li>                    
                          </div>
                        </div>
                        <a class="text-decoration-none text-danger px-2" id="cityGuide" href="">${cityGuide}</a>
                        <a class="text-decoration-none text-dark px-2" id="bookTrip" href="">${bookTrip}</a>
                      </div>
                        <div class="p-2 p-lg-1 d-none d-lg-block custom-flex-basis">
                            <div>
                            <a href="" class="d-inline text-decoration-none text-danger mx-3 mytrip">
                                <p class="d-inline me-1">My Trip</p>
                                <i class="fa-regular fa-heart mr-0"></i>
                            </a>
                            <a href=""><i class="fa-solid fa-magnifying-glass px-3 text-dark"></i></a>
                            </div>
                        </div>
                        <form class="d-flex flex-nowrap gap-1 mx-0 d-lg-none m-sm-2 px-2">
                            <input id="searchPlaceholder" class="form-control flex-grow-1 my-2 my-sm-0" type="search" placeholder="${searchPlaceholder}"
                            aria-label="Search">
                            <button id="searchButton" class="btn btn-outline-danger my-2 my-sm-0" type="submit">${searchButton}</button>
                        </form>
                        </div>
                    </div>
                    </div>
                  </div>
                </nav>
              </div>
            `;

  return nav;
}

const writeHeaderTitles = function(data) {
  let navItems = document.querySelectorAll('.nav-link');

  navItems.forEach((navElement, i) => {
    navElement.innerText = data.header.nav[i].title;
  });

  let offcanvasNavbarLabel = document.getElementById('offcanvasNavbarLabel');
  offcanvasNavbarLabel.innerText = data.header.cityGuide;

  let cityGuide = document.getElementById('cityGuide');
  cityGuide.innerText = data.header.cityGuide;

  let bookTrip = document.getElementById('bookTrip');
  bookTrip.innerText = data.header.bookTrip;

  let searchPlaceholder = document.getElementById('searchPlaceholder');
  searchPlaceholder.value = data.header.searchPlaceholder;

  let searchButton = document.getElementById('searchButton');
  searchButton.innerText = data.header.searchButton;
}

// Change Navbar background on scroll
const navbarBackgroundScroll = function () {
  let prevScrollpos = window.pageYOffset;
  let navbarElement = document.querySelector('.navbar');
  let rightBarInfo = document.querySelector('.right-bar-info');

  if (window.matchMedia('(max-width: 960px)').matches) {
    navbarElement.classList.add('bg-nav-white-transparent');
  } else {
    navbarElement.classList.add('bg-nav-white-gradient');
    rightBarInfo.classList.add('opacity-75');
  }

  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos + 114 > currentScrollPos && window.pageYOffset < 228) {
      if (window.matchMedia('(max-width: 960px)').matches) {
        navbarElement.classList.remove('bg-nav-white-gradient');
        navbarElement.classList.add('bg-nav-white-transparent');
      } else {
        navbarElement.classList.add('bg-nav-white-gradient');
        navbarElement.classList.remove('bg-nav-white-transparent');
        navbarElement.classList.add('pb-lg-5');
        navbarElement.classList.remove('pb-lg-1');
        rightBarInfo.classList.add('opacity-75');
      }
    } else {
      navbarElement.classList.remove('bg-nav-white-gradient');
      navbarElement.classList.remove('pb-lg-5');
      navbarElement.classList.add('bg-nav-white-transparent');
      navbarElement.classList.add('pb-lg-1');
      rightBarInfo.classList.remove('opacity-75');
    }
    prevScrollpos = currentScrollPos;
  };
};

// Export functions
export { navbarBackgroundScroll, writeHeader, writeHeaderTitles };
