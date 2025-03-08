/**
 * 'this' keyword  in Javascript
 *
 */


// Example - 1

// const obj = {
//     name : "sanjay",
//     displayMessage : function () {
//         console.log(this)
//     }
// }
// obj.displayMessage();



// Example - 2

const obj = {
    name : "sanjay",
    displayMessage : function () {
        console.log(`Hello  - ` + obj.name);
        console.log(`Hello  - ` + this.name); // Implicit Binding (binding this keyword)
    }
}
obj.displayMessage();



// Example - 3     -------> here function is not executed by object so it refers to window object 
function calculateSum() {
    console.log(this);
}
calculateSum();

// if this is not inside a function and also not excuted by object then it is refers to window object 
console.log(this);