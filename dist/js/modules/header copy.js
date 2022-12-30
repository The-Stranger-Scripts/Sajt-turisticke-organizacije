
const writeHeader = function(data) {
  let navbarUlElements = '';

  data.header.forEach(element => {
    navbarUlElements += `
      <li class="nav-item p-lg-0 py-2 ps-5 me-3">
        <a class="nav-link" href="${element.link}">${element.title}</a>
      </li>
    `
  });

  let nav = `
              <div class="container-xxl">
              <nav class="navbar navbar-expand-lg fixed-top pt-0 pb-lg-5 pb-0">
              <div class="container-xxl px-0 ps-sm-1 pe-sm-2">
                  <a class="navbar-brand m-0 pt-1 pt-sm-0" href="index.html">
                  <img src="img/logo.png" alt="Turistička agencija Novog Sada" width="221"
                      class="d-inline-block align-text-top py-1 px-3 logo-img">
                  </a>
                  <button class="navbar-toggler align-self-center" type="button" data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                  <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel">
                  <div class="offcanvas-header pe-4">
                      <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Vodič kroz Novi Sad</h5>
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
                          <li><button class="dropdown-item" id="sr">Srpski</button></li>
                          <li><button class="dropdown-item" id="en">English</button></li>                    
                        </div>
                      </div>
                      <a class="text-decoration-none text-danger px-2" href="">Vodič kroz Novi Sad</a>
                      <a class="text-decoration-none text-dark px-2" href="">Rezerviši</a>
                    </div>
                      <div class="p-2 p-lg-1 d-none d-lg-block custom-flex-basis">
                          <div>
                          <a href="" class="d-inline text-decoration-none text-danger mx-3 mytrip">
                              <p class="d-inline">My Trip</p>
                              <i class="fa-regular fa-heart mr-0"></i>
                          </a>
                          <a href=""><i class="fa-solid fa-magnifying-glass px-3 text-dark"></i></a>
                          </div>
                      </div>
                      <form class="d-flex flex-nowrap gap-1 mx-0 d-lg-none m-sm-2 px-2">
                          <input class="form-control flex-grow-1 my-2 my-sm-0" type="search" placeholder="Search"
                          aria-label="Search">
                          <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
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

const writeHeaderTitles(data) {
  let navItems = document.querySelectorAll('.nav-link');

  navItems.forEach((navElement, i) => {
    navElement.innerText = data.header.id[i + 1];
    console.log(navElement);
  })
}

/* EXCLUDED
<li class="nav-item p-lg-0 py-2 ps-5 me-3">
    <a class="nav-link active" aria-current="page" href="#">Naslovna</a>
</li>
 */

// Promena Navbar background-a na scroll
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

// function getButtons() {
//   return {
//     srOption: document.getElementById('sr'),
//     enOption: document.getElementById('en')
//   }
// }

// const langButtons = document.getElementsByClassName('dropdown-item');
// const changeLang = function (langbuttons) {

//   if(langbuttons[])
// }

export { navbarBackgroundScroll, writeHeader };
