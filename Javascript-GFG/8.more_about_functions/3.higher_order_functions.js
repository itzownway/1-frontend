/**
 * Higher Order Function
 * 
 */

// Example -1   - pass function as argument

// function example1() {
//    return "Welcome";
// }

// // example2 function accepting example1 function as argument
// function example2(example1) {
//      console.log("Sanjay", example1())
// }
// example2(example1);



// Example - 2   - function returns the another function

// function example3() {
//     return function () {
//         console.log("Hello From Inner Function");
//    }
//  }

//  const output = example3();
//  output();



// Example -1 Square of Numbers

const arr = [1,2,3,4];
function squareOfNumber(arr) {
    let squareNumbers = [];
  for(let number of arr) {
    squareNumbers.push(number ** 2);
  }
  return squareNumbers;
}

console.log(squareOfNumber(arr));


// Example -2  Cube of numbers

const arr1 = [1,2,3,4];
function cubeOfNumber(arr1) {
    let cubeNumbers = [];
  for(let number of arr1) {
    cubeNumbers.push(number ** 3);
  }
  return cubeNumbers;
}

console.log(cubeOfNumber(arr1));




// Example  - Higher Order Function


const ar  = [1,2,3,4,5];


function square(number) {
return number ** 2;
}

function cube(number) {
    return number ** 3;
}

function calculatePower(wrapper, ar) {
    let temAr = [];
    for(let number of ar) {
        temAr.push(wrapper(number));
    }
    return temAr;
}

const squareValue = calculatePower(square, ar);
console.log(squareValue);
const cubeValue = calculatePower(cube, ar);
console.log(cubeValue);

