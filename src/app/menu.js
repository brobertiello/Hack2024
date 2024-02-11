function hideCustomContextMenu() {

    document.getElementById('customContextMenu').style.display = "none";

}
 
// toggling the menu on right click to the page
function showCustomContextMenu(event) {

    event.preventDefault();

    var myContextMenu = document.getElementById('customContextMenu');

    if (myContextMenu.style.display == "block") {

       myContextMenu.style.display = "none";

    }

    else {

       myContextMenu.style.display = "block";

       myContextMenu.style.left = event.pageX + "px";
       myContextMenu.style.top = event.pageY + "px";

    }

}

document.onclick = hideCustomContextMenu;
document.oncontextmenu = showCustomContextMenu;

//MENU COMMANDS

function mRandomPosition() {

}

function mCenterPosition() {

}

function mExit() {
    
}