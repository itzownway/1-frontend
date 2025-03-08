/**
 * Computed Properties 
 * 
 *  Adding Property to Object
 * 
 * 
 */


// Add any properties to an object

// const object = {
//     name: "Name",
//     age: 26
// }
// object.city = "City";
// object.state = "State";
// console.log(object);


//  Computed Properties Ex - 1

const readLineSync = require("readline-sync");
const key = readLineSync.question("What You want to know about Sanjay - (middleName, lastName, age )= ");
const bike = readLineSync.question("Which Bike Sanjay has - (Ninja, R15, KTM) = ");

const obj = {
    middleName:"Kumar",
    lastName: "Das",
    age:28,
    [bike] : "No Bike Available"
}


// console.log(obj[key]);    ---> it will get the value from object by user input key 
// console.log(obj[bike]);
// console.log(obj);


console.log(obj["middleName"]);
console.log(obj[bike]);



