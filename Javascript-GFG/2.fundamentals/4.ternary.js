const userInput = require("readline-sync");

const mark = userInput.question("Enter the Number = ");


/**
 *  Ternary Operator
 * 
 *   condition ? yes : no
 * 
 */

(mark>50)?console.log("Pass"):console.log("Fail");