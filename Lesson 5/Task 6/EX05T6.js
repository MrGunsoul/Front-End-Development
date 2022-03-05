const initializeApplication = () =>{


    
    let balloon = document.getElementById("balloon");
    balloon.style.fontSize="20px";
    document.addEventListener("keydown", balloonGrow);
    

    function balloonGrow(event) {
    let currentSize = parseInt(balloon.style.fontSize);
    let changeAmount=5;

        if (event.key == "ArrowUp") {
            balloon.style.fontSize=(currentSize + changeAmount) + 'px';

            
            if ((currentSize + changeAmount) > 100){
                console.log("Kill");
                document.removeEventListener("keydown", balloonGrow);
                document.getElementById("balloon").innerHTML = "💥";
            } else {
                console.log("Not yet")
            } 



        } else if (event.key == "ArrowDown") {
            balloon.style.fontSize=(currentSize-changeAmount) + 'px';
            console.log("Down");
    }
        }

    };




window.addEventListener("load", () => {
    initializeApplication();
})