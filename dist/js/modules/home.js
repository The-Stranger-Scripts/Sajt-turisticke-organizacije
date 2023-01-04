// Ovde se mogu kuckati funkcionalnosti vezane za Home stranicu!
// Ovde se mogu kuckati funkcionalnosti vezane za Home stranicu!
function writeHome(db) {
    let data = db.main;
    let homeCtn = '';

    let header = (data) => {
        return `
        <div class="header-card">
            <h2>${data.title}</h2>
            <h5>${data.subtitle}</h5>
            <p>${data.content}</p>
        </div>
        `
    }

    let heading = (data) => {
        return `
        <div class="home-heading">
            <h5>${data.title}</h5>
            <p>${data.content}</p>
        </div>
        `
    }

    let media = (data) => {
        return `
        <div class="home-img">
            <img src="${data.image.link}" alt="">
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
        `
    }

    let explore = (data) => {
        let exploreData = '<div class="home-card">';

        for (let i = 0; i < 3; i++) {
            exploreData += `
            <div class="home-card-ctn home-card-ctn-sm">
                <img class="card-img" src="img/lending-page/Zimzolend_14-1024x683.jpg" alt="">
                <div class="card-body">
                    <h3>${data[i].title}</h3>
                    <h6><span>${data[i].subtitle}</span></h6>
                    <p>${data[i].content}</p>
                </div>
            </div>`
        }
        exploreData += '</div>';
        return exploreData;
    }

    let eatDrink = (data) => {
        let eatDrinkData = '<div class="home-card">';

        for (let i = 0; i < 3; i++) {
            eatDrinkData += `
            <div class="home-card-ctn home-card-ctn-sm">
                <img class="card-img" src="${data[i].image}" alt="">
                <div class="card-body">
                    <h3>${data[i].title}</h3>
                    <h6><span>${data[i].subtitle}</span></h6>
                    <p>${data[i].content}</p>
                </div>
            </div>`
        }
        eatDrinkData += '</div>';

        return eatDrinkData;
    }

    let events = (data) => {
        let eventsData = `<div class="home-card">`;

        for (let i = 0; i < 2; i++) {
            eventsData += `
            <div class="home-card-ctn home-card-ctn-m">
                <img class="card-img" src="${data[i].image}" alt="">
                <div class="card-body">
                    <h3>${data[i].title}</h3>
                    <h6><span>${data[i].subtitle}</span></h6>
                    <p>${data[i].content}</p>
                </div>
            </div>`
        }
        eventsData += '</div>';

        return eventsData;
    }

    let accomodation = (data) => {
        let accomodationData = `<div class="home-card">`;

        for (let i = 0; i < 3; i++) {
            accomodationData += `
            <div class="home-card-ctn home-card-ctn-sm">
                <img class="card-img" src="${data[i].image}" alt="">
                    <div class="card-body">
                        <h3>${data[i].title}</h3>
                        <h6><span>${data[i].subtitle}</span></h6>
                        <p>${data[i].content}</p>
                    </div>
            </div>
            `
        }
        accomodationData += '</div>';
        return accomodationData;
    }

    let blog = (data) => {
        let blogData = '<div class="home-card">';

        for (let i = 0; i < 3; i++) {
            blogData += `
            <div class="home-card-ctn home-card-ctn-sm">
                <img class="card-img" src="${data[i].image}" alt="">
                    <div class="card-body">
                        <h3>${data[i].title}</h3>
                        <h6><span>${data[i].subtitle}</span></h6>
                        <p>${data[i].content}</p>
                    </div>
            </div>
            `
        }
        blogData += '</div>';

        return blogData;
    }

    let form = (data) => {
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
        `
    }

    homeCtn += `
        <div class="container-xxl">
            ${header(data.home.header)}

            ${explore(data.explore.content)}

            ${heading(data.eatDrink.heading)}
            ${eatDrink(data.eatDrink.content)}

            ${heading(data.home.heading)}

            ${media(data.home)}

            ${heading(data.events.heading)}
            ${events(data.events.content)}

            ${heading(data.accomodation.heading)}
            ${accomodation(data.accomodation.content)}

            ${heading(data.blog.heading)}
            ${blog(data.blog.content)}

            ${form(data.home.form)}

        </div>
    `
    return homeCtn;
}

export default writeHome;
