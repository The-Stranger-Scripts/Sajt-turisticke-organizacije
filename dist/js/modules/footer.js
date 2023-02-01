function writeFooter(data) {
  let arrow = `<i class="fa fa fa-chevron-right link-arrow"></i>`;
  let ftWrap = '';

  data.header.nav.forEach(element => {
    ftWrap += `
        <a href="${element.link}">
            <h4>${arrow} ${element.title} </h4>
        </a>
      `;
  });

  let ft = `

    <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44925.233048109716!2d19.814421699613142!3d45.27150645318393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b10613de93455%3A0xb6f7d683724fe28!2sNovi%20Sad!5e0!3m2!1sen!2srs!4v1674914723104!5m2!1sen!2srs" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div class="ft-container">
        <div class="ft-wrap">
            <a href="#">
                <img src="img/ns-logo-final-ver-transparent.svg" alt="" class="ft-logo">
            </a>
        </div>
        <div class="ft-wrap">
            <div class="ft-wrap-sec">
                <h3>${data.footer.nav}</h3>
                ${ftWrap}
            </div>
        </div>
        <div class="ft-wrap">
            <div class="ft-wrap-sec">
                <h3>${data.footer.contact}</h3>
                <p><i class="fa-solid fa-location-dot"></i> Trg slobode 3, 21101 Novi Sad</p>
                <p><i class="fa-solid fa-phone"></i> (+381) 23 45 678</p>
                <p><i class="fa-regular fa-envelope"></i> strangerscripts@gmail.com</p>
                <p><i class="fa-regular fa-clock"></i> Mon. - Fri. 8am - 4pm</p>
            </div>
        </div>
    </div>

    <div class="ft-social-icons">
        <a class="insta-container" title="Instagram" href=""><i class="fa-brands fa-instagram"></i></a>
        <a class="fb-container" title="Facebook" href=""><i class="fa-brands fa-facebook"></i></a>
        <a class="twitter-container" title="Twitter" href=""><i class="fa-brands fa-twitter"></i></a>
        <a class="yt-container" title="Youtube" href=""><i class="fa-brands fa-youtube"></i></a>
        <a class="in-container" title="Linkedin" href=""><i class="fa-brands fa-linkedin"></i></i></a>
    </div>
    <div class="copyright">
        <i class="fa-regular fa-copyright"></i>
        <p> Copyright 2023 The Stranger Scripts</p>
    </div>
    `;

  return ft;
}

export default writeFooter;
