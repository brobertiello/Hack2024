function setAnimation(imagePath) {

    getAlfredoImage().src = "../assets/" + imagePath;

}

function aniIdle() {

    setAnimation("idle.gif");

}

function aniWalk() {

    setAnimation("walk.gif");

}