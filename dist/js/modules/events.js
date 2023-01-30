// Ovde se mogu kuckati funkcionalnosti vezane za events stranicu!
const writeEvents = data => {
  let events = data.main.events;

  let eventsContainer = document.createElement('div');
  let eventsHeaderSection = document.createElement('section');

  eventsContainer.classList.add('container-xxl', 'px-0');
  eventsContainer.setAttribute('data-aos', 'fade-up');

  eventsHeaderSection.classList.add('main-sec-label');

  eventsContainer.append(eventsHeaderSection);

  eventsHeaderSection.innerHTML = `
  <h2>${events.heading.title}</h2>
  <h5>${events.heading.subtitle}</h5>
  <p>${events.heading.content}</p>
  `;

  events.content.forEach((eventSection, i) => {
    let eventsRegularSection = document.createElement('section');

    // Section Heading/Label
    eventsRegularSection.innerHTML = `
      <div class="event-label">
        <h2>${eventSection.heading.title}</h2>
        <p>${eventSection.heading.content}</p>
      </div>
      `;

    // Events Cards
    let cardColumns = document.createElement('div');
    cardColumns.classList.add('card-columns', 'container-lg');

    // One card section
    if (eventSection.eventCard.length === 1) {
      eventsRegularSection.innerHTML += `
          <div class="one-event-card">
            <img src="${eventSection.eventCard[0].image}" alt="" />
            <div class="event-label">
              <h4>${eventSection.eventCard[0].title}</h4>
              <p class="text-date">${eventSection.eventCard[0].date}</p>
              <p>${eventSection.eventCard[0].subtitle}</p>
            </div>
          </div>
        `;
    } else {
      // Two or more cards section

      eventSection.eventCard.forEach(cardItem => {
        cardColumns.innerHTML += `
            <div class="event-card">
              <img src="${cardItem.image}" alt="" />
              <div class="event-card-body">
                <h4>${cardItem.title}</h4>
                <p class="text-date">${cardItem.date}</p>
                <p class="event-text">${cardItem.content}</p>
              </div>
            </div>
          `;
      });
      eventsRegularSection.append(cardColumns);
    }

    eventsContainer.append(eventsRegularSection);
  });

  return eventsContainer.outerHTML;
};
