// Ovde se mogu kuckati funkcionalnosti vezane za Home stranicu!
// Ovde se mogu kuckati funkcionalnosti vezane za Home stranicu!
function writeHome(data) {
    console.log(data);
    let homeCtn = '';
    let exploreSection = () => {
        let exploreData = '';

        for (let i = 0; i < 3; i++) {
            exploreData += `
            <div class="home-card-ctn home-card-ctn-sm">
                <img class="card-img" src="img/lending-page/Zimzolend_14-1024x683.jpg" alt="">
                <div class="card-body">
                    <h3>${data.main.explore[i].title}</h3>
                    <h6><span>${data.main.explore[i].subtitle}</span></h6>
                    <p>${data.main.explore[i].content}</p>
                </div>
            </div>`
        }
        return exploreData;
    }

    let eatDrink = () => {
        let eatDrinkData = '';

        console.log(data.main.eatDrink);
        for (let i = 0; i < 3; i++) {
            eatDrinkData += `
            <div class="home-card-ctn home-card-ctn-sm">
                <img class="card-img" src="${data.main.eatDrink[i].image}" alt="">
                <div class="card-body">
                    <h3>${data.main.eatDrink[i].title}</h3>
                    <h6><span>${data.main.eatDrink[i].subtitle}</span></h6>
                    <p>${data.main.eatDrink[i].content}</p>
                </div>
            </div>`
        }
        return eatDrinkData;
    }

    let events = () => {
        let eventsData = '';

        for (let i = 0; i < 2; i++) {
            eventsData += `
            <div class="home-card-ctn home-card-ctn-m">
                <img class="card-img" src="${data.main.events[i].image}" alt="">
                <div class="card-body">
                    <h3>${data.main.events[i].title}</h3>
                    <h6><span>${data.main.events[i].subtitle}</span></h6>
                    <p>${data.main.events[i].content}</p>
                </div>
            </div>`
        }
        return eventsData;
    }


    homeCtn += `
        <div class="container-xxl">
            <div class="header-card">
                <h2>${data.main.home[0].title}</h2>
                <h5>${data.main.home[0].subtitle}</h5>
                <p>${data.main.home[0].content}</p>
            </div>

            <div class="home-card">
                ${exploreSection()}
            </div>

            <div class="home-heading">
                <h5>Your guide to the perfect Novi Sad expirience</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio delectus quis est excepturi corrupti
                    saepe
                    obcaecati, reprehenderit tempore architecto itaque veritatis provident, accusamus fuga corporis
                    laborum
                    eos facere? Harum, ullam.</p>
            </div>

            <div class="home-card">
                ${eatDrink()}
            </div>

            <div class="home-heading">
                <h5>Your guide to the perfect Novi Sad expirience</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio delectus quis est excepturi corrupti
                    saepe
                    obcaecati, reprehenderit tempore architecto itaque veritatis provident, accusamus fuga corporis
                    laborum
                    eos facere? Harum, ullam.</p>
            </div>

            <div class="home-img">
                <img src="img/lending-page/Gradska_kuca_Novi_Sad.jpg" alt="">
                <div class="header-card">
                    <h2>Gradska kuća<br> (Magistrat)</h2>
                    <p>GRADSKA KUĆA (Magistrat) na Trgu slobode je monumentalno neorenesansno zdanje izgrađeno 1895. Za
                        podizanje Magistrata
                        raspisan je 1855</p>
                </div>
            </div>

            <div class="home-video">
                <iframe src="https://www.youtube.com/embed/Z1y7SRO5Rg0" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>

            <div class="home-heading">
                <h5>Your guide to the perfect Novi Sad expirience</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio delectus quis est excepturi corrupti
                    saepe
                    obcaecati, reprehenderit tempore architecto itaque veritatis provident, accusamus fuga corporis
                    laborum
                    eos facere? Harum, ullam.</p>
            </div>

            <div class="home-card">
                ${events()}
            </div>

            <div class="home-heading">
                <h5>Your guide to the perfect Novi Sad expirience</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio delectus quis est excepturi corrupti
                    saepe
                    obcaecati, reprehenderit tempore architecto itaque veritatis provident, accusamus fuga corporis
                    laborum
                    eos facere? Harum, ullam.</p>
            </div>

            <div class="home-card">
                <div class="home-card-ctn home-card-ctn-sm">
                    <img class="card-img" src="img/lending-page/Zimzolend_14-1024x683.jpg" alt="">
                    <div class="card-body">
                        <h3>Neki naslov</h3>
                        <h6><span>Decembar 31</span></h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ratione voluptatum vitae
                            eum fugit
                            officiis odio mollitia quo adipisci hic!</p>
                    </div>
                </div>
                <div class="home-card-ctn home-card-ctn-sm">
                    <img class="card-img" src="img/lending-page/Zimzolend_14-1024x683.jpg" alt="">
                    <div class="card-body">
                        <h3>Neki naslov</h3>
                        <h6><span>Decembar 31</span></h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ratione voluptatum vitae
                            eum fugit
                            officiis odio mollitia quo adipisci hic!</p>
                    </div>
                </div>
                <div class="home-card-ctn home-card-ctn-sm">
                    <img class="card-img" src="img/lending-page/Zimzolend_14-1024x683.jpg" alt="">
                    <div class="card-body">
                        <h3>Neki naslov</h3>
                        <h6><span>Decembar 31</span></h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ratione voluptatum vitae
                            eum fugit
                            officiis odio mollitia quo adipisci hic!</p>
                    </div>
                </div>
            </div>

            <div class="home-heading">
                <h5>Your guide to the perfect Novi Sad expirience</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio delectus quis est excepturi corrupti
                    saepe
                    obcaecati, reprehenderit tempore architecto itaque veritatis provident, accusamus fuga corporis
                    laborum
                    eos facere? Harum, ullam.</p>
            </div>

            <div class="home-card">
                <div class="home-card-ctn home-card-ctn-xs">
                    <img class="card-img" src="img/lending-page/Zimzolend_14-1024x683.jpg" alt="">
                    <div class="card-body">
                        <h3>Neki naslov</h3>
                        <h6><span>Decembar 31</span></h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ratione voluptatum vitae
                            eum fugit
                            officiis odio mollitia quo adipisci hic!</p>
                    </div>
                </div>
                <div class="home-card-ctn home-card-ctn-xs">
                    <img class="card-img" src="img/lending-page/Zimzolend_14-1024x683.jpg" alt="">
                    <div class="card-body">
                        <h3>Neki naslov</h3>
                        <h6><span>Decembar 31</span></h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ratione voluptatum vitae
                            eum fugit
                            officiis odio mollitia quo adipisci hic!</p>
                    </div>
                </div>
                <div class="home-card-ctn home-card-ctn-xs">
                    <img class="card-img" src="img/lending-page/Zimzolend_14-1024x683.jpg" alt="">
                    <div class="card-body">
                        <h3>Neki naslov</h3>
                        <h6><span>Decembar 31</span></h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ratione voluptatum vitae
                            eum fugit
                            officiis odio mollitia quo adipisci hic!</p>
                    </div>
                </div>
                <div class="home-card-ctn home-card-ctn-xs">
                    <img class="card-img" src="img/lending-page/Zimzolend_14-1024x683.jpg" alt="">
                    <div class="card-body">
                        <h3>Neki naslov</h3>
                        <h6><span>Decembar 31</span></h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ratione voluptatum vitae
                            eum fugit
                            officiis odio mollitia quo adipisci hic!</p>
                    </div>
                </div>
            </div>

            <div class="form-newsletter">
                <h2>Subscribe to out monnthly newsletter Nazivsjta Unfolded</h2>
                <p>Yes, please! I would like to get Copenhagen Unfolded, a newsletter about what to do, see, experience,
                    and taste in
                    Copenhagen. Sponsored content might occur. By signing up I confirm that I have read and accept
                    Wonderful Copenhagen's
                    Privacy Policy. I can at any time unsubscribe from the newsletter and withdraw my consent.</p>

                <div class="form-input">
                    <label for="email-newsletter">Email</label>
                    <input type="email" id="email-newsletter">
                    <button id="email-newsletter-btn">Sounds great! Sing me up!</button>
                </div>
            </div>
        </div>
        <!-- U ovom elementu se kuca sav ostali content stranice po dizajnu -->
    `
    return homeCtn;
}

export default writeHome;
