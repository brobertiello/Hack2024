function moveToPercent(x, y) {

    try{

        var win = nw.Window.get();

        var area = getWorkArea();
        var maxW = area.width;
        var maxH = area.height;

        var xPos = x*(maxW-win.width);
        var yPos = y*(maxH-win.width);

        win.moveTo(Math.floor(xPos), Math.floor(yPos));

    }catch(error){

        alert("Error");

        alert('Error Moving to ('+xPos+', '+yPos+'): ' + error.message);

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

function getWorkArea() {

    try{

        alert(nw.Screen.screens.length)

        var screenArea = nw.Screen.screens[0].work_area;

    }catch(error){

        alert('Error getting screen size:' + error.message);

    }finally{

        return screenArea;
    
    }

}