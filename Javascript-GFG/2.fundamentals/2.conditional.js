

// const isLoggedIn = 18;

// if(isLoggedIn > 17){
//     console.log("hello");
// }


// const userInput = require('readline-sync');

// const userAge = userInput.question("How Old Are You ?");

// if(userAge > 17){
//     console.log("You are Major");
// } else{
//     console.log("You are Minor");
// }


const userInput = require("readline-sync");

const number = userInput.question("Enter the number");

// // Check the Even  and Odd Number

// if(number/2==0){
//     console.log("Even");
// } else{
//     console.log("Odd");
// }

/**
 * AND   - &&   - both need to be true
 * OR    - ||   - one of them true
 * 
 */


const divisibleByThree = number % 3;
const divisibleByFive = number % 5;
const divisibleBySeven = number % 7;


if(divisibleByThree === 0 && divisibleByFive === 0){
 console.log("Divisible By 3 and 5");
} else if(divisibleBySeven===0){
 console.log("Divisible by 7");
}

