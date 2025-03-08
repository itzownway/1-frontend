// Block Scope
// Example using let variables

// {
//     let a = 30;
//     let b = 30;
//     console.log(a); //
//     console.log(b); //
// }

//console.log(a); //  here it will give the error message
//console.log(b); //  here it will give the error message


// Example using var variables
// {
//     var c = 30;
//     var d = 30;
//     console.log(c); //
//     console.log(d); //
// }

//console.log(c); // here it will not give the error message
//console.log(d); // here it will not give the error message

// Example using const variables
// {
//     const e = 30;
//     const f = 30;
//     console.log(e); //
//     console.log(f); //
// }

//console.log(e); // here it will  give the error message
//console.log(f); // here it will  give the error message



// using let and const variables --> only accessible in block scope

// using var variables --> we can access any where



// if var is declared inside a function then it will be not accessible to the outside of the function

//------------------
// Example using function

function varInsideFunction() {
    var m = 40;
    var n = 60;
}

console.log(m);  // here it will give the error message
console.log(n);  // here it will give the error message


// Example using Block

{
    var m = 40;
    var n = 60;
}

console.log(m);  // here it will not  give the error message
console.log(n);  // here it will not give the error message


/***
 * 
 *  For Block Scope
 * 
 *  let     ---> not able to access outside block
 * 
 *  const   ---> not able to access outside block
 * 
 *  var     ---> you can access outside block  (here var is behaves like global variable)
 * 
 */ 


/***
 * 
 *  For Function   = any variable declara iniside the function that is only accessible inside function
 * 
 *  let     ---> not able to access outside function
 * 
 *  const   ---> not able to access outside the function
 * 
 *  var     ---> not able to access outside the function
 * 
 */ 