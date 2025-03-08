/**
 * String.trim()
 */

const message = "hello world";

// console.log(message.length);

// console.log(message.trim().substring(0,7));

console.log(message.indexOf("o",5));



// remove the whiteSpaces 

function removeSpaces(str) {
    return str.trim();
}
const output = removeSpaces("Sanjay Kumar Das   ");
console.log(output);

