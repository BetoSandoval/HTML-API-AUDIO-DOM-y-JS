var video = document.getElementById('video'),
    btnPlay = document.getElementById('play'),
    btnPause = document.getElementById('pause');

    btnPlay.addEventListener('click',function() {
        video.play();
    });

    btnPause.addEventListener('click', function() {
        video.pause();
    });