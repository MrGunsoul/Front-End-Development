const initializeApplication = () =>{

    let button1 = document.getElementById("first");
    let button2 = document.getElementById("second");
    let button3 = document.getElementById("third");
    
    button1.addEventListener("mousedown", event => {
        if (event.button == 0){
            document.body.style.background="blue";
        } 
    })
    button2.addEventListener("mousedown", event => {
        if (event.button == 0){
            document.body.style.background="gray";
        } 
    })
    button3.addEventListener("mousedown", event => {
        if (event.button == 0){
            document.body.style.background="white";
        } 
    })
};


window.addEventListener("load", () => {
    initializeApplication();
})