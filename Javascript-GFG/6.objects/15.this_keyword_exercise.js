/**
 * 'this' keyword - exercise
 */


// Example -1

// function displayName() {
//     console.log(this);
// }

// const user1 = {
//     name : "sanjay",
//     // displayName,        // here display() is assign inside user1 object
//     showName : displayName // here display() is assign to showName Variable
// }

// // console.log(user1);
// // user1.displayName();   // when function is executed by object then this keyword refers to curent Object

// user1.showName();



// Example -2


// function displayName() {
//     console.log(this);  // in this case this is refers to window object bcz this function is called inside another function
// }

// const user2 = {
//     name: "Sanjay",
//     showName : function () {
//         // inside the function and not called by object
        //    console.log(this); // it will refer to current object
//         displayName();  // here displayName() function called  object of  inside another function so - object only have scope to outer function not inner function
//     }
// }

// user2.showName()  // here showName() method is executed by user2 object



// Example - 3

// const  displayName = () =>  {
//     console.log(this);
//     // this - will refer to window object (due to arrow function)
// }


// const user3 = {
//     name : "Sanjay",
// }

// displayName.apply(user3);  //  here user3 object to executing displayName() but function is a Arrow function so this is not refer to current object


// Example - 4

// function User() {        // Constructor Function
//     console.log(this);
// }
 
// const user1 = new User();  // function is executed by new keyword so this - will refers to Object


// Example - 5


// const person = {
//     name : "Sanjay",
//     sayHi : function () {
//         console.log(`Welcome ${this.name}`);
//     }
// };

// person.sayHi();  // Object is executing the function



// Example - 6

const person = {
    name : "Sanjay",
    sayHi : function () {
        console.log(`Welcome ${this.name}`);
    }
};

let person1 = person.sayHi;
console.log(person1);
person1();  // Welcome only


