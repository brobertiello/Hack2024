function getScreenObj() {

    return nw.Screen;

}

function getScreens() {

    return getScreenObj().screens;

}

function getSpace() {

    try{

        var space = getScreens()[0].bounds;

        alert("Work Area: " + space.width + " " + space.height);

    }catch(error){

        alert('Error getting screen size:' + error.message);

    }finally{

        return space;
    
    }

}

function getWorkingWidth(){
    return getSpaceWidth();
}

function getWorkingHeight(){
    return getSpaceHeight();
}

function getSpaceWidth() {

    return getSpace().width;

}

function getSpaceHeight() {

    return getSpace().height;

}