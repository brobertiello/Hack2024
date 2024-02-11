function moveToPercent(x, y) {

    try{

        var win = nw.Window.get();
        
        var maxW = getSpaceWidth();
        var maxH = getSpaceHeight();

        var xPos = x*(maxW-win.width);
        var yPos = y*(maxH-win.height);

        win.moveTo(Math.floor(xPos), Math.floor(yPos));

    }catch(error){

        alert('Error Moving to (' + xPos + ', ' + yPos + '): ' + error.message);

    }finally{

        
    
    }

}

function moveToCorner() {   

    moveToPercent(1, 1);

}

function moveToRandom() {

    var xPos = Math.random();
    var yPos = Math.random();

    moveToPercent(xPos, yPos);

}