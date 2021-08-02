let inMessage = document.getElementById("user_input")
let outMessage = document.getElementById("display")



inMessage.addEventListener("keydown", function (event) {
    if (event.which == 13) {
        event.preventDefault();
        showInput();
    }
});


function showInput() {
    //sets lastMessage from the input text
    outMessage.innerHTML = inMessage.value;
    //clears textbox 
    inMessage.value =  " ";
}

