function setAnimation(imagePath) {

    getAlfredoImage().src = "../assets/" + imagePath;

    if(imagePath!=="dance.gif"){
        stopMusic();
    }

}

function aniIdle() {

    setAnimation("idle.gif");

}

function aniWalk() {

    setAnimation("walk.gif");

}

function aniWalkLeft() {

    setAnimation("walkleft.gif");

}

function aniDance() {

    setAnimation("dance.gif");

}

function aniSpin() {

    setAnimation("spin.gif");

}