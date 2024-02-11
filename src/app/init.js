function init() {

    try{

        nw.Screen.Init();

    }catch(error){

        alert('Error Initializing:' + error.message);

    }

}