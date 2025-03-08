
// Declare the Arrow function

// function which did not have the name is call as anonymous function

// anonymousFunction();


// console.log(anonymousFunction);


// Anonymous Function & Function Expression (function assign to variable)

var anonymousFunction = function () {
console.log("Anonymous function");
}

console.log(typeof anonymousFunction);
anonymousFunction();


//  Named Function Expression (function has name and assign to variable)

let anonymousFunction = function greetMessage() {
    console.log("Anonymous function");
    console.log(greetMessage);  // function is local so it is accesible here
    }
    
    console.log(typeof anonymousFunction);
    anonymousFunction();

    // console.log(greetMessage);  // not accesible
