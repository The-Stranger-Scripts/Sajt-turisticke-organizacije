// Ovde se mogu dodavati funkcionalnosti vezane za explore stranicu!
const explore = data => {
        let heading = data.main.explore.heading;
        let sections = data.main.explore.content;


        document.querySelector("#headingTitle").innerHTML = heading.title;
        document.querySelector("#headingSubtitle").innerHTML = heading.subtitle;
        document.querySelector("#headingContent").innerHTML = heading.content;
        let sectionsWrapper = document.querySelector("#sectionsWrapper");
        sectionsWrapper.innerHTML = ""
        sections.forEach((section, i) => {
            let videoHtml = "";
            if (i===2) {
                videoHtml = `
                <div class="video-container">
                <video autoplay="" muted="" loop="" src=${section.videoLink}></video>
              </div>
                `;

            }

            
            sectionsWrapper.insertAdjacentHTML("beforeend", `
                    <section class="three-col-sec">
                    <div class="explore-label">
                        <h2>${section.heading.title}</h2>
                        <p>${section.heading.content}</p>
                        </div>
                    <div id="c${i}" class="card-columns container-lg"></div>
                    </section>
                    ${videoHtml}
                `);

            section.exploreCard.forEach((card, j) => {
                let c = document.querySelector(`#c${i}`);
               
                c.insertAdjacentHTML("beforeend", `
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




//function playPauseVideo() {
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




   
