/**
 * Function Borrowing - Bind
 */


const user = {
    name : "sanjay",
    age : 90
}

function sayHi(degree, year) {
    console.log(this.name, degree, year);
}


// sayHi.bind(user, "B-Tech", 2016);  -- not get output

const result = sayHi.bind(user, "B-Tech", 2016); 
result();


// at the time of call also we can pass the values
const result1 = sayHi.bind(user, "B-Tech"); 
result1(2017);
