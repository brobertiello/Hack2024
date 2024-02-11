function getScreenObj() {

    return nw.Screen;

}

function getScreens() {

    return getScreenObj().screens;

}

function getWorkArea() {

    try{

        var screenArea = getScreens()[0].work_area;

    }catch(error){

        alert('Error getting screen size:' + error.message);

    }finally{

        return screenArea;
    
    }

}

function getWorkingWidth() {

    return getWorkArea().width;

}

function getWorkingHeight() {

    return getWorkArea().height

}