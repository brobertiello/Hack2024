function getAlfredoImage() {
    return document.getElementById("alfredo");
}

let messages = [];

function addBotMessage(msg){
    messages.push(
        {"role": "alfredo", "content": msg}
    );
}

function addUserMessage(msg){
    messages.push(
        {"role": "user", "content": msg}
    );
}

function initMessages(){
    messages.push(
        {"role": "system", "content": "You are 'ALFREDO' (AI Learning Friend Ready to Engage in Dialogue and Operations)."}
    )
    messages.push(
        {"role": "system", "content": "You were created by Brandon Robertiello, Lucas Ho, Ethan Le, and Pierre Garcia."}
    )
    messages.push(
        {"role": "system", "content": "Your role is to be of assistance to users as your avatar lives in their computer screen."}
    )
}

function getMessages() {
    return messages;
}