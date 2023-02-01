// Ovde se mogu dodavati funkcionalnosti vezane za accomodation stranicu!

// const ratingStars = [...document.getElementsByClassName("rating__star")];

// function executeRating(stars) {
//     const starClassActive = "rating__star fas fa-star";
//     const starClassInactive = "rating__star far fa-star";
//     const starsLength = stars.length;
//     let i;
//     stars.map((star) => {
//         star.onclick = () => {
//             i = stars.indexOf(star);

//             if (star.className === starClassInactive) {
//                 for (i; i >= 0; --i) stars[i].className = starClassActive;
//             } else {
//                 for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
//             }
//         };
//     });
// }
// executeRating(ratingStars);

// function playPauseVideo() {
//     let videos = document.querySelectorAll("video");
//     videos.forEach((video) => {
//         video.muted = true;

//         let playPromise = video.play();
//         if (playPromise !== undefined) {
//             playPromise.then((_) => {
//                 let observer = new IntersectionObserver(
//                     (entries) => {
//                         entries.forEach((entry) => {
//                             if (
//                                 entry.intersectionRatio !== 1 &&
//                                 !video.paused
//                             ) {
//                                 video.pause();
//                             } else if (video.paused) {
//                                 video.play();
//                             }
//                         });
//                     }, { threshold: 0.2 }
//                 );
//                 observer.observe(video);
//             });
//         }
//     });
// }

function writeAccomodation(data) {
  let dataHeading = data.main.accomodation.heading;
  let dataContent = data.main.accomodation.content;
  let star = `<i class='rating__star far fa-star'></i>`;
  console.log(dataHeading);
  console.log(dataContent);

  // WriteSec FN
  function writeSec(dataHeading, dataContent, col) {
    let secCtn = `
        <section class="${col}-col-sec">
            <div class="accomodation-label">
                <h2>${dataHeading.title}</h2>
                <p>${dataHeading.content}</p>
            </div>
             <div class="card-columns container-lg">`;

    dataContent.forEach(e => {
      if (col !== 'one') {
        secCtn += `
              <div class='accomodation-card'>
                  <img src='${e.image}' alt='' />
                  <div class='accomodation-card-body'>
                      <h4>${e.title}</h4>
                      <p class='accomodation-text'>${e.content}</p>
                  <div class='rating'>`;
        if (col === 'five') {
          for (let i = 0; i < 5; i++) {
            secCtn += star;
          }
        }
      } else {
        secCtn += `
          <div class="exit-video-container">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/i0FuvHoTkwU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" allowfullscreen></iframe>`;
      }

      secCtn += `
            </div>
          </div>
        </div>
        `;
    });

    secCtn += ` </section>`;
    return secCtn;
  }

  let accomodationData = `
    <div class="accomodation-container-xl">
        <section class="main-card">
        <h2>${dataHeading.title}</h2>
        <h5${dataHeading.subtitle}</h5>
        <p>${dataHeading.content}</p>
        </section>
    </div>`;

  accomodationData += `
    ${writeSec(dataContent[0].heading, dataContent[0].accomodationCard, 'five')}
    ${writeSec(dataContent[1].heading, dataContent[1].accomodationCard, 'two')}
    ${writeSec(dataContent[2].heading, dataContent[2].accomodationCard, 'one')}
    ${writeSec(
      dataContent[3].heading,
      dataContent[3].accomodationCard,
      'three'
    )}
    `;

  return accomodationData;
}
export default writeAccomodation;
