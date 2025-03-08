/**
 *  Hoisting - var & function
 * 
 */



// undefined and not defined 


// Example -1

// printing the age variable before declare
// console.log(age);  // undefined         ----> as per execution context (memory is allocated in creation phase)

// var age = 100;
// console.log(age);

// // calling the function before declare
// showName();

// console.log(showName);

// function showName() {
//     console.log("Sanjay Kumar Das");
// }
// showName();


// Example -2 


/**
 * 
 *  Here just check the flow of Execution context  - Creation Phase and Execution Phase
 * 
 * 
 */

// console.log(userName);  // it will print the undefined
// console.log(printName); // it will print the function 
// printName(); // it will print the function output


var userName = function printName() {
    console.log("itz.sanjay");
}

function printName() {
    console.log("itz.sanjay");
}


// Example - 3

var example = function exampleHoisting() {
console.log("Sanjay");
}

function exampleHoisting() {
  console.log("Sanjay Kumar");
}


printName();
exampleHoisting();






