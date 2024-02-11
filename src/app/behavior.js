function onClick() {

}

// WALKING

function promptWalk() {

    //alert(getSpaceWidth() + ", " + getSpaceHeight());

    walk(getInput("Enter X"), getInput("Enter Y"));

}

let startX = 0;
let startY = 0;
let currentX = 0;
let currentY = 0;
let destX = 0;
let destY = 0;

let duration = 2000;
let startTime;

let stepInterval;

// Function to initiate the walk
function walk(newDestX, newDestY) {

    startX = getDisplayX();
    startY = getDisplayY();
    destX = newDestX;
    destY = newDestY;

    duration = 4*Math.sqrt(Math.pow(destX-startX, 2), Math.pow(destY-startY, 2));
  
    // Start the timer
    startTime = Date.now();

    if(destX>startX){
        aniWalk();
    }else{
        aniWalkLeft();
    }
  
    // Call the step function every 1/10th of a second
    stepInterval = setInterval(step, 100);
  }
  
  // Function to perform each step
  function step() {
    // Calculate elapsed time
    let elapsedTime = Date.now() - startTime;
  
    // Check if the duration has passed
    if (elapsedTime >= duration) {

        aniIdle();

      clearInterval(stepInterval); // Stop the interval
      return;
    }
  
    // Calculate the progress ratio (0 to 1)
    let progress = elapsedTime / duration;
  
    // Calculate the current position based on the progress
    currentX = startX + (destX - startX) * progress;
    currentY = startY + (destY - startY) * progress;
  
    // Call the moveTo function with the current position
    moveTo(Math.round(currentX), Math.round(currentY));
  }

// DANCING

function dance() {

  aniDance();

  startMusic();

}

function spin() {

  aniSpin();

}