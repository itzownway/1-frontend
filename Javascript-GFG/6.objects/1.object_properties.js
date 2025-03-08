/**
 * 
 * Objects ---> {key : value}
 * 
 */


// Simple object declaration
const obj = {};
// console.log(typeof obj);

// Object Literal
const ob = {
   name : "Sanjay", // property
   age : 26,
   job : "Trying",
   courses : ["html", "css", "bootstarp", "javascript"]
}
// console.log(ob);


// Two way to access the object properties

//1-  Access Properties of Object (.)  ---> to access we need to add . after object
// console.log(ob.age);  

//2-  Access Properties of Object (by [])
// console.log(ob["job"]);


// Access object by Square Bracket  - Why we need Square bracket
const object = {
    city : "Banglore",
    role : "Software Developer",
    "is remote" : "No",
    skill : ["ubuntu", "magento", "react", "python"]
}

// console.log(object.is remote); // here we can not access by . 
console.log(object["is remote"]);





