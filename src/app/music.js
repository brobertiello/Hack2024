var isPlaying = false;

function startMusic() {
    var audio = document.getElementById("danceAudio");
    audio.currentTime = 0;
    audio.play();
}

function stopMusic() {
    var audio = document.getElementById("danceAudio");
    audio.pause();
    audio.currentTime = 0;
}