function init() {

    try{

        nw.Screen.Init();

        initMessages();

    }catch(error){

        alert('Error Initializing:' + error.message);

    }

}