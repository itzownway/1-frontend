/**
 * 
 * Global and local variables
 * Global, Local and Block Scope
 * 
 */


// Any variables which not inside a function = Global Variable
// Global variables example

var x = 3;   // Global variable
console.log(x);

function showNumber() {
    console.log(x);
}

showNumber();


// Local variables   = all the variables declared inside a function is called local variable

function localVariable() {
    var y = 10;  // local variable
    console.log(y);
}
//console.log(y);   // y is not global variable  
