/**
 * Hoisting - let, const and TDZ
 * 
 */


// let and const are hoisted  but it went to Temporal DeadZone


// console.log(y); // undefined
// console.log(x); //  error    --------- here x is hoisted but it is in temporal deadzone

// console.log(a);   // different error


// let x = 9;
// var y = 10;

// console.log(x);
// console.log(y);






/**
 * 
 * What is Temporal DeadZone
 * 
 *    - basically it is a time period from  where variable is hoisted and variable is declared
 * 
 *    - time period where variable is actually hoisted and when the variable is intialilized with the value 
 * 
 *    - also (The Period between a variable declaration and its initialization)
 * 
 */


// Debug the Temporal DeadZone


// TDZ start here 

// console.log(y);

// let x = 9;  // TDZ end here
// var y = 10;

// console.log(x);



// global , local , block ---> scopes


