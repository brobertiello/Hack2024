function say(msg){

    var sb = document.getElementById("alfredoSpeechBubble")
    
    sb.innerHTML = msg;

    sb.style.display = "block";

}