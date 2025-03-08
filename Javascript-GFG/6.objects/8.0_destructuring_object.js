/**
 * Destructuring Objects
 * 
 */


// Example - 1

const user = {
    name : "Sanjay",
    address : {
        home : "Odisha",
        village : "Gapabandhu Nagar"
    },
    courses : ['html', 'css', 'js']
}


let {name, address, courses} = user;

// console.log(name);
// console.log(address);

//  let {userName, address, courses} = user;  ---> it will give undefined bcz  - userName is not present in user object


// Example - 2

let numbers = [1,2,3];
let [a, b, c] = numbers;


// Example -3

// Change the object name properties (here we are changed the name to userName of user object)
let {name : userName} = user;
console.log(userName);