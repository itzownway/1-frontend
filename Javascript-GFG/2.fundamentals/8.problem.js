const userInput = require("readline-sync");

const number = userInput.question("Enter the Number");

// if(number<50){
//     userInput.question("Enter the Number again");
// }

while(number>=50){
    number = userInput.question("Enter the number less 50");
}
console.log("Correct");

//  take the number from user  beelow 50 