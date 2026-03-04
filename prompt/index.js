//this is prompt method that take user input and the value is store
// if the user not give any input the variable is set to null
// rest if the js script will not run until the user give input or cancel it
const btn = document.getElementById("prompt-btn");
const output = document.getElementById("output");
btn.addEventListener("click", () => {
    const userName = prompt("What is your name?", "Guest");
    output.textContent = "Hello, " + userName + "!";
});