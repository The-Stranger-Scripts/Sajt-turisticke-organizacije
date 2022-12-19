import Data from './functions.js';

let arrow = `<i class="fa fa fa-chevron-right link-arrow"></i>`;
let ftWrap = '';

Data.footer.secwrap.forEach(element => {
    ftWrap += `
    <div class="ft-wrap">
        <div class="ft-wrap-sec">`

    if (element.title[1].length <= 1) {
        ftWrap += `<h3>${element.title}</h3>`
    } else {
        Object.values(element.title).forEach(title => {
            ftWrap += `<h3>${title}</h3>`
        })
    }

    if (element.content) {
        if (element.content[1].length <= 1) {
            ftWrap += `<p>${element.content}</p>`
        } else {
            Object.values(element.content).forEach(content => {
                ftWrap += `<p>${content}</p>`
            })
        }
    }

    if (element.link[1].length <= 1) {
        ftWrap += `<a href="" class="ft-link">${arrow} ${element.link}</a>`
    } else {
        Object.values(element.link).forEach(el => {
            ftWrap += `<a href="" class="ft-link">${arrow} ${el}</a>`
        })
    }

    ftWrap += `</div>
        </div>`
})

let ft = `
    <div class="ft-container">
        <div class="ft-wrap">
           <img src="img/logo.png" alt="" class="ft-logo">
        </div>

        ${ftWrap}

        <div class="ft-wrap">
            <div class="ft-wrap-sec">
                <h3>Contact Us</h3>
                <p><i class="fa fa-map-marker"></i> Lorem ipsum</p>
                <p><i class="fa fa-phone"></i> (+381) 23 45 678</p>
                <p><i class="fa fa-envelope"></i> info@nazivsajta.com</p>
                <p><i class="fa fa-clock-o"></i> Mon. - Fri. 8am - 4pm</p>
            </div>
        </div>
    </div>

    <div class="ft-social-icons">
        <a class="insta-container" title="Instagram" href=""><i class="fa fa-instagram"></i></a>
        <a class="fb-container" title="Facebook" href=""><i class="fa fa-facebook"></i></a>
        <a class="twitter-container" title="Twitter" href=""><i class="fa fa-twitter"></i></a>
        <a class="yt-container" title="Youtube" href=""><i class="fa fa-youtube-play"></i></a>
        <a class="in-container" title="Linkedin" href=""><i class="fa fa-linkedin"></i></i></a>
    </div>

    <div class="copyright">
        <i class="fa fa-copyright"></i>
        <p> Copyright 2023 The Stranger Scripts</p>
    </div>
`

export default ft;
