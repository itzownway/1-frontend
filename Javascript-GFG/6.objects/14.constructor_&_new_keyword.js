/**
 * new keyword and constructor functions
 * 
 */


// constructor function are regular function with Capital letter can access by - new keyword

function User() {

}
const user = new User(); // calling by  new keyword
console.log(user);


// Example -1
function User1() {

}
const user1 = User1;  // simply assign to variable
console.log(user1);



// Example -2

function User2(name , age) {
    // console.log(this) // --- it is refers to User2 Object
    // (this.name = "Sanjay"), (this.age = 30);
    (this.name = name), (this.age = age);
}

// const user2 = new User2();
// console.log(user2);
// // console.log(user2.name);
// // console.log(user2.age);

const user2 = new User2("Sanjay" , 34);
const call1 = new User2("Sujay", 29);
const call2 = new User2("Kumar", 23);
console.log(user2);
console.log(call1);
console.log(call2);