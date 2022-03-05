const initializeApplication = () =>{

    let addButton = document.getElementById("add");

    addButton.addEventListener("click", () => {

        let newMessage = document.getElementById("newmessage").value;

        let newPN;//Paragraph node
        let newTN;//Text Node


        if (newMessage && newMessage.length > 0) {
            newPN=document.createElement('p');
            newTN=document.createTextNode(newMessage);

            newPN.prep(newTN)

            let allMessages=document.getElementById("messages");

            allMessages.prepend(newPN)


            document.getElementById("newmessage").value="";

        }

    });

};


window.addEventListener("load", () => {
    initializeApplication();
})