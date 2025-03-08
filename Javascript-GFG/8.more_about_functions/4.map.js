/**
 * Map - Filter
 * 
 * 
 *  - loop over the array and call the function
 * 
 */

const arr = [1,2,3,4,5,6,7,8,9,10];

// Example 1


// pure function
function getSuare(number) {
    return  number ** 2;
}
const squareValue = arr.map(getSuare);


// const square = (number) => number ** 2;
// const squareValue = arr.map(square);
// console.log(squareValue);

// arrow function
const squareNumbers = arr.map((number) => number ** 2);
console.log(squareNumbers);
