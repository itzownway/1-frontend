// Array Methods

/**
 *  push()     ---> 
 * 
 *  concat()   ---> 
 * 
 */

// push() example
function examplePush() {
    let fruits = ["apple", "banana", "mango"];
    fruits.push("graphes");
    fruits.push("Cron", "Guava");
    return fruits;
}

const fruits = examplePush();
console.log(fruits);

// concat() example
function exampleConcat() {
    let fruits = ["apple", "banana", "mango"];
    let colors = ["red", "pink", "sky"];
    let months = ["Jan", "feb", "march"];


    const combine = fruits.concat(colors, months);
    return combine;
}

console.log(exampleConcat());










