const initializeApplication = () =>{


 
    
    button.addEventListener("mousedown", event => {
        if (event.button == 0){
            document.body.style.background=document.getElementById("theColor").value;
        } 
    })
    
};

function main(){

    document.getElementById("content").innerHTML = initializeApplication();
}
window.addEventListener("load", () => {
    main();
})