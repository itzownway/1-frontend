/**
 * First Class Functions
 */


// Example -1 - Assigned function to a variable


// const greedMessage = function() {
//   console.log("Hello")
// }
// greedMessage();


// Example -2   -- passing function as argument

// function wrapper() {
//     return "welcome"
// }
// // here wrapper function as an argument to greedMessage() function
// function greedMessage(inner , name) {
//     console.log(name, inner());  // calling function inside a function
// }
// // here we are not calling the wrapper function we are just passing the reference
// greedMessage(wrapper, "Sanjay");

 

// Example - 3   - return function from another function


function sayHi() {
    function sayHello() {
           let name = "Sanjay";
           console.log(name, "welcome");
    }
    return sayHello;
}

// console.log(sayHi());

// const output = sayHi();
// console.log(output);
// console.log(output());
// output();
sayHi()();