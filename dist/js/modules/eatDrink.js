const eatDrinkPage = data => {
  let eatDrink = data.main.eatDrink;

  let eatDrinkContainer = document.createElement('div');
  let eatDrinkHeaderSection = document.createElement('section');

  eatDrinkContainer.classList.add('container-xxl', 'px-0');
  eatDrinkContainer.setAttribute('data-aos', 'fade-up');

  eatDrinkHeaderSection.classList.add('welcome-card');

  eatDrinkContainer.append(eatDrinkHeaderSection);

  eatDrinkHeaderSection.innerHTML = `
    <h1>${eatDrink.heading.title}</h1>
    <h5>${eatDrink.heading.subtitle}</h5>
    <p>${eatDrink.heading.content}</p>
    <h5>${eatDrink.heading.text}</h5> 
    `;

  eatDrink.content.forEach((eatDrinkSec, i) => {
    let eatDrinkRegularSection = document.createElement('div');

    eatDrinkRegularSection.innerHTML = `
          <div class="text">
            <h2>${eatDrinkSec.heading.title}</h2>
            <p>${eatDrinkSec.heading.content}</p>
          </div>
          `;

    let cardColumns = document.createElement('div');
    cardColumns.classList.add('card-columns', 'container-lg');

    if (eatDrinkSec.eatDrinkCard.length === 1) {
      eatDrinkRegularSection.innerHTML += `
         <div class="invitation-card">
           <img src="${eatDrinkSec.eatDrinkCard[0].image}" alt="" />
             <div class="invitation-label">
                 <h4>${eatDrinkSec.eatDrinkCard[0].title}</h4>
                  <p>${eatDrinkSec.eatDrinkCard[0].content}</p>
             </div>
          </div> 
                   
         `;
    } else {
      eatDrinkSec.eatDrinkCard.forEach(cardItem => {
        cardColumns.innerHTML += `
               <div class="universal-card">
                  <img src="${cardItem.image}" alt="" />
                   <h4>${cardItem.title}</h4>
                    <p>${cardItem.content}</p>
                  </div>     
          `;
      });
      eatDrinkRegularSection.append(cardColumns);
    }
    eatDrinkContainer.append(eatDrinkRegularSection);
  });

  return eatDrinkContainer.outerHTML;
};
