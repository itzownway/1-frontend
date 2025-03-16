// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText

let welcomeEl = document.getElementById("welcome-el");

let name = "Sanjay ";
let greeting = "Hi this is a simple message";

welcomeEl.innerText = name + greeting ;
welcomeEl.innerText += "👋"