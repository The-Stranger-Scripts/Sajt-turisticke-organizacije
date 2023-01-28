let writeHome = data => {
  let homeData = data.main.home;

  let exploreData = data.main.explore;
  let exploreDataCards = exploreData.content[3].exploreCard;

  let eatDrinkData = data.main.eatDrink.content;

  let eventsData = data.main.events;
  let eventsDataCards = eventsData.content[0].eventCard;
  let accomodationData = data.main.accomodation.content;

  let homeCtn = '';

  let homeHeaderSec = data => {
    return `
          <div data-aos="fade-up" class="header-card">
              <h2>${data.title}</h2>
              <h5>${data.subtitle}</h5>
              <p>${data.content}</p>
          </div>
          `;
  };

  let homeHeadingSec = data => {
    return `
            <div class="home-heading">
                <h5>${data.title}</h5>
                <p>${data.content}</p>
            </div>
            `;
  };

  let homeMediaSec = data => {
    let dataSec = homeHeadingSec(data.heading);
    dataSec += `
        <div class="home-img">
            <img  src="${data.image.link}" alt="">
            <div class="header-card">
                <h2>${data.image.title}</h2>
                <p>${data.image.content}</p>
            </div>
        </div>

        <div class="home-video">
            <iframe src="${data.video.link}" title="${data.video.title}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>
        `;
    return dataSec;
  };
  let homeFormSec = data => {
    return `
          <div class="form-newsletter">
              <h2>${data.title}</h2>
              <p>${data.content}</p>

              <div class="form-input">
                  <label for="email-newsletter">${data.label}</label>
                  <input type="email" id="email-newsletter">
                  <button id="email-newsletter-btn">${data.buttonText}</button>
              </div>
          </div>
          `;
  };

  let writeHomeSec = (data, dataCards, cardSize) => {
    let secData = homeHeadingSec(data.heading);
    secData += `
            <a href=""><div class="home-card">`;
    dataCards.forEach(el => {
      secData += `
            <div class="home-card-ctn home-card-ctn-${cardSize}">
                <img class="card-img" src="${el.image}" alt="">
                <div class="card-body">
                    <h3>${el.title}</h3>
                    <p>${el.content}</p>
                </div>
            </div>`;
    });

    secData += '</div><a/>';
    return secData;
  };

  homeCtn += `
  <div class="container-xxl">
    ${homeHeaderSec(homeData.header)}
    ${writeHomeSec(exploreData, exploreDataCards, 'sm')}
    ${writeHomeSec(eventsData, eventsDataCards, 'm')}
    ${homeMediaSec(homeData.content[0])}
    ${homeFormSec(homeData.content[0].form)}
  </div>
  `;
  // console.log(homeData);
  // console.log(exploreData);
  // console.log(exploreDataCards);

  // console.log(eatDrinkData);
  // console.log(eventsData);
  // console.log(eventsDataCards);
  // console.log(accomodationData);

  return homeCtn;
};

export { writeHome };
