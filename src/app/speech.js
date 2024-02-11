function promptInput() {

    var inp = document.getElementById("userSpeechBubble");

    inp.style.display = "block";

}

function askAlfredo(msg) {

    say(msg);

}

function say(msg){

    var sb = document.getElementById("alfredoSpeechBubble")
    
    sb.innerHTML = msg;

    showMessage();

}

function showMessage() {

    var sb = document.getElementById("alfredoSpeechBubble")

    sb.style.display = "block";

}

function hideMessage() {

    var sb = document.getElementById("alfredoSpeechBubble")

    sb.style.display = "none";

}