/**
 *  this  keyword example
 */


// const user1 = {
//     name : "sanjay",
//     showName : function () {
//         console.log(this.name);
//     }
// }


// const user2 = {
//     name : "sujay",
//     showName : function () {
//         console.log(this.name);
//     }
// }


// const user3 = {
//     name : "omm",
//     showName : function () {
//         console.log(this.name);
//     }
// }

// showName()   --- is repeted 3 times
// user1.showName();
// user2.showName();
// user3.showName();


// Explicit Binding
// call - apply and bind



// instead of calling 3 time create one function and use for 3 object






// Example Arrow Function not Support in Objct

// normal function it is working
// const user1 = {
//     name : "sanjay",
//     showName : function () {
//         console.log(this.name);
//     }
// }

// user1.showName();  ---> sanjay


// same object with arrow function
// const user1 = {
//     name : "sanjay",
//     showName : () => {   // arrow function refer to global object so inside object arrow function not refere to object
//         console.log(this.name);
//     }
// }

// user1.showName();  // not getting any output




// Example = 3


const user = {
    name : "sanjay",
    showName : function () {
        console.log(this.name);
        function showMessage() {
            console.log(this.name);  // this is inside the ragular function so it is not executed by object
            console.log(this);  // here this is inside ragular function and it is not executed by object so it will refer to window object
        }
        showMessage();
    }
}

user.showName();