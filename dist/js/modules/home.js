let writeHome = data => {
  let homeData = data.main.home;

  let exploreData = data.main.explore;
  let exploreDataCards = exploreData.content[3].exploreCard;

  let eatDrinkData = data.main.eatDrink;
  let eatDrinkDataCards = eatDrinkData.content[1].eatDrinkCard;

  let eventsData = data.main.events;
  let eventsDataCards = eventsData.content[0].eventCard;

  let accomodationData = data.main.accomodation;
  let accomodationDataCards = accomodationData.content[3].accomodationCard;

  let homeCtn = '';

  let homeHeaderSec = data => {
    return `
    <div data-aos="fade-up" class="header-card">
      <h2>${data.title}</h2>
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
    let dataSec = '';
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

  let writeHomeSec = (data, dataCards, cardSize, link) => {
    let secData = homeHeadingSec(data.heading);
    secData += `<a href="${link}"><div class="home-card">`;

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
      ${writeHomeSec(exploreData, exploreDataCards, 'sm', 'explore.html')}
      ${writeHomeSec(eatDrinkData, eatDrinkDataCards, 'xs', 'eat-drink.html')}
      ${homeMediaSec(homeData.content[0])}
      ${writeHomeSec(eventsData, eventsDataCards, 'm', 'events.html')}
      ${writeHomeSec(
        accomodationData,
        accomodationDataCards,
        'sm',
        'explore.html'
      )}
    </div>
    `;

  return homeCtn;
};

export { writeHome };
