/**
 * 
 * for in    --> Basically check the Property Existence
 * 
 * 
 */


// Here we are check name properties is available in object or not
const obj = {
      name : "sanjay",
      age : 20
}
const isProperyExist = "name" in obj;   // "name"  ==> represent the name of obj 
console.log(isProperyExist);


// Example - 1

for(let item in obj) {
    console.log(item);
}

// Example - 2
for(let key in obj) {
    console.log(key, obj[key]);
}