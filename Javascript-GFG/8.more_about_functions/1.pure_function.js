/**
 * pure functions
 */


//Example -1

// this is a pure function
// function getDoubleValue(number) {
//     return number * 2;
// }

// const result = getDoubleValue(5);
// console.log(result);


// Example -2 

// this is not pure function bcz here x is the external parameters

// const x = 5;
// function getDoubleValue(number) {
//     return number * 2 * x;  // here x is the external parameter
// }

// const result = getDoubleValue(5);
// console.log(result);


// Example -3 
// this is not a pure function
// function appendNumber(arr) {
//   arr.push(5,6);  // here we are doing mutating so it is not a pure function
//   return arr;
// }
// const result1 = appendNumber([1,2,3,4]);
// console.log(result1);


// Example -4 
// this is a pure function 
function appendNumber(arr) {
    let newArr = [];   // this array also local to the function
    newArr.push(...arr, 5, 6);  // here orginal arr value is not changing
    return newArr;
  }
  const result1 = appendNumber([1,2,3,4]);
  console.log(result1);