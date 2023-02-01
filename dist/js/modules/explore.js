const explore = data => {
  let heading = data.main.explore.heading;
  let sections = data.main.explore.content;

  document.querySelector('#headingTitle').innerHTML = heading.title;
  document.querySelector('#headingSubtitle').innerHTML = heading.subtitle;
  document.querySelector('#headingContent').innerHTML = heading.content;
  let sectionsWrapper = document.querySelector('#sectionsWrapper');
  sectionsWrapper.innerHTML = '';
  sections.forEach((section, i) => {
    let videoHtml = '';
    if (i === 2) {
      videoHtml = `
                <div class="video-container">
                <iframe
                src="https://player.vimeo.com/video/794952260?loop=1&autoplay=1&background=1&controls=0&muted=1"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
                style=""
                title="ns-landing-video.mp4"
              ></iframe>
                </div>
                `;
    }

    sectionsWrapper.insertAdjacentHTML(
      'beforeend',
      `
                    <section class="three-col-sec">
                    <div class="explore-label">
                        <h2>${section.heading.title}</h2>
                        <p>${section.heading.content}</p>
                        </div>
                    <div id="c${i}" class="card-columns container-lg"></div>
                    </section>
                    ${videoHtml}
                `
    );

    section.exploreCard.forEach((card, j) => {
      let c = document.querySelector(`#c${i}`);

      c.insertAdjacentHTML(
        'beforeend',
        `
                    <div class="explore-card">
                        <img src="${card.image}" alt="" />
                        <div class="explore-card-body">
                        <h4>${card.title}</h4>
                        <p class="explore-text">${card.content}</p>
                        </div>
                    </div>
                `
      );
    });
  });
};

function playPauseVideo() {
  let videos = document.querySelectorAll('iframe');
  videos.forEach(video => {
    video.muted = true;

    let playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.then(_ => {
        let observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.intersectionRatio !== 1 && !video.paused) {
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

playPauseVideo();