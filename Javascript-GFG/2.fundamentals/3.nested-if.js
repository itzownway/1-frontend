
const userInput = require("readline-sync");

const number = userInput.question("Enter the Number = ");

// check the even number with nested if else 
if(number%2==0){
    console.log("Even");
    if(number %4 == 0){
        console.log(`${number} is divisible by 4`)
    } else{
        console.log(`${number} is not divisible by 4`);
    }
} else{
    console.log("Odd");
     if(number % 5 == 0 ){
        console.log(`${number} is divisible by 5`)
     } else{
        console.log(`${number} is not divisible by 5`)
     }
}