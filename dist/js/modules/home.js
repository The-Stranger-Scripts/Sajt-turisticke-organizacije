function writeHome(db) {
    let data = db.main;
    let homeCtn = '';

    let homeHeaderSec = (data) => {
        return `
        <div data-aos="fade-up" class="header-card">
            <h2>${data.title}</h2>
            <h5>${data.subtitle}</h5>
            <p>${data.content}</p>
        </div>
        `
    }

    let homeHeadingSec = (data) => {
            return `
            <div class="home-heading">
                <h5>${data.title}</h5>
                <p>${data.content}</p>
            </div>
            `
    }

    let homeMediaSec = (data) => {
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
        `
        return dataSec;
    }

    let writeHomeSec = (data, cardSize) => {
        let secData = homeHeadingSec(data.heading);
        secData += `
        <a href="${data.heading.link}"><div class="home-card">`;
        let count;
        switch (cardSize) {
            case "xs":
                count = 4;
                break;
            case "sm":
                count = 3;
                break;
            case "m":
                count = 2;
                break;
            default:
                break;
        }
        for (let i = 0; i < count; i++) {
            secData += `
            <div class="home-card-ctn home-card-ctn-${cardSize}">
                <img class="card-img" src="${data.content[i].image}" alt="">
                <div class="card-body">
                    <h3>${data.content[i].title}</h3>
                    <h6><span>${data.content[i].subtitle}</span></h6>
                    <p>${data.content[i].content}</p>
                </div>
            </div>`
        }
        secData += '</div><a/>';
        return secData;
    }

    let homeFormSec = (data) => {
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

    let writeEventSec = (data, cardSize) => {
        let secData = homeHeadingSec(data.header);
        secData += `
        <a href=""><div class="home-card">`;
        let count;
        switch (cardSize) {
            case "xs":
                count = 4;
                break;
            case "sm":
                count = 3;
                break;
            case "m":
                count = 2;
                break;
            default:
                break;
        }
        data.content[0].eventCard.forEach(el => {
            secData += `
            <div class="home-card-ctn home-card-ctn-${cardSize}">
                <img class="card-img" src="${el.image}" alt="">
                <div class="card-body">
                    <h3>${el.title}</h3>
                    <h6><span>${el.subtitle}</span></h6>
                    <p>${el.content}</p>
                </div>
            </div>`
        });

        secData += '</div><a/>';
        return secData;
    }

    homeCtn += `
        <div class="container-xxl">
            ${homeHeaderSec(data.home.header)}

            ${writeHomeSec(data.explore, "sm")}

            ${writeHomeSec(data.eatDrink, "sm")}

            ${homeMediaSec(data.home.content[0])}

            ${writeEventSec(data.events, "m")}

            ${writeHomeSec(data.accomodation, "sm")}

            ${writeHomeSec(data.blog, "xs")}

            ${homeFormSec(data.home.content[0].form)}
        </div>
    `
    return homeCtn;
}

export { writeHome };
