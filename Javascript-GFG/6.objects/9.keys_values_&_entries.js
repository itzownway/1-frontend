/**
 * Keys, values & entries
 * 
 * 
 */


const obj = {
    name: "Sanjay", 
    age : 90,
    city :"Odihsa"
}
// entries   --> it return the array of key values of an object
const entries = Object.entries(obj);
console.log(entries);


// keys  --> it return the  array of key  values of an object
const keys = Object.keys(obj);
console.log(keys);

// values  --> it return the array of values of an object
const values = Object.values(obj);
console.log(values);

