"use strict";
function showMessage(){
    const firstName = "Toria";
    let messageEl = document.getElementById("message");
    // concatenating a string with a variable.
    // messageEl.innerHTML = "Hello " + firstName + ", you are so pretty today."
    messageEl.innerHTML = `Hello ${firstName}, you are so pretty today!`
}
showMessage();
