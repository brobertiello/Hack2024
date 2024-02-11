function promptInput() {

    hideMessage();

    var speechForm = document.getElementById("userSpeechBubble");

    speechForm.style.display = "block";

    var inputForm = document.getElementById("inputField");

    inputForm.value = "";

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