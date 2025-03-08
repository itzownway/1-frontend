/**
 *   Get user Data
 * 
 */


const userInput = require('readline-sync');
const name = userInput.question("What is You Name ? = ");
const age = userInput.question("What is You Age ? = ");

// console.log('Okay your name is ' + name);
// console.log(`Okay your name is ${name}`);

// const dob = 2024 - age;
// const dob = 2024 + age;  -- here it will do concate
const dob = 2024 + Number(age);

console.log(`Your name is ${name} and Age is ${age} Dob is ${dob}`);


