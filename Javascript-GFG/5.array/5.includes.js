/**
 * 
 * includes 
 * 
 * arr.includes(any)
 * 
 */

let arr = ['html', "css", "bootstrap", "javascript", "jquery", "react"];

const input = require("readline-sync");
const userInput = input.question(`Which Course you want to choose ${arr}`);

const courseAvailable = arr.includes(userInput);

if(courseAvailable) {
    console.log("Yes Available");
} else {
    console.log("Not Available");
}