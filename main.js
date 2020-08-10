var video = document.getElementById('audio'),
    btnPlay = document.getElementById('play'),
    btnPause = document.getElementById('pause'),
    volumen = document.getElementById('volumen');

    btnPlay.addEventListener('click',function() {
        video.play();
    });

    btnPause.addEventListener('click', function() {
        video.pause();
    });

    volumen.addEventListener('change', function(){
        video.volume = volumen.value;
    })
