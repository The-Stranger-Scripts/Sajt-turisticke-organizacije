// Ovde se mogu dodavati funkcionalnosti vezane za explore stranicu!

let langS = "sr_SR";
let langE = "en_EN";
let initialLoad = true;
fetch('db/db.json')
    .then(res => res.json())
    .then(data => {
    lang = localStorage.getItem('language');
    if (lang == "sr_SR") {
        document.querySelector("#tvrdjava").style.display = 'block';
        document.querySelector("#fortress").style.display = 'none';
    }

    if (initialLoad) {
        //nav.innerHTML = header.writeHeader(data[`${lang}`]);
        initialLoad = false;
    } else {
        //header.writeHeaderTitles(data[`${lang}`]);
    }
    console.log("Language ", lang);
    // console.log("======= data[sr_SR]: ", data[lang]);
    // console.log("======= data[en_EN]: ", data["en_EN"]);
    let languageData = data[lang];
    let heading = languageData.main.explore.heading;
    let sections = languageData.main.explore.content;


    document.querySelector("#headingTitle").innerHTML = heading.title;
    document.querySelector("#headingSubtitle").innerHTML = heading.subtitle;
    document.querySelector("#headingContent").innerHTML = heading.content;

    sections.forEach((section, i) => {

        let wrapperSelector = i < 2 ? "#firstHalfSections" : "#secondHalfSections";
        document.querySelector(wrapperSelector).insertAdjacentHTML("beforeend", `
                <section class="three-col-sec">
                <div class="explore-label">
                    <h2>${section.heading.title}</h2>
                    <p>${section.heading.content}</p>
                    </div>
                <div id="c${i}" class="card-columns container-lg"></div>
                </section>
            `);

        section.exploreCard.forEach((card, j) => {
        document.querySelector(`#c${i}`).insertAdjacentHTML("beforeend", `
                <div class="explore-card">
                    <img src="${card.image}" alt="" />
                    <div class="explore-card-body">
                    <h4>${card.title}</h4>
                    <p class="explore-text">${card.content}</p>
                    </div>
                </div>
                `);
        })
    });
    }
)


function playPauseVideo() {
    let videos = document.querySelectorAll("video");
    videos.forEach((video) => {
         video.muted = true;
        
        let playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.then((_) => {
                let observer = new IntersectionObserver(
                    (entries) => {entries.forEach((entry) => {
                        if (
                            entry.intersectionRatio !== 1 &&
                            !video.paused
                        ) {
                            video.pause();
                        } else if (video.paused) {
                            video.play();
                            video.muted = false;
                        }
                    });
                },
                { threshold: 0.2 }
                );
                observer.observe(video);
            });
        }
    });
}



   
