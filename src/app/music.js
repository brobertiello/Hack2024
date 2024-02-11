var isPlaying = false;

function startMusic() {
    var audio = document.getElementById("danceAudio");
    audio.play();
}

function stopMusic() {
    var audio = document.getElementById("danceAudio");
    audio.pause();
}