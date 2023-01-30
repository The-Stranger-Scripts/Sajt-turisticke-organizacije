// Ovde se mogu dodavati funkcionalnosti vezane za explore stranicu!

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


  
