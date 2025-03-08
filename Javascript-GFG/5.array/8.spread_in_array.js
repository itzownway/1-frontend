/**
 * 
 * Spread in Array 
 * 
 *  ..arr
 * 
 */


const arr = [1,2,3,4,5];
console.log(arr);
console.log(...arr);


// bese use case of spread 

function spreadExample() {
    const arr1 = [1,2,3,4,5,6];
    const arr2 = [10,11,12,13,14];
    const arr3 = [...arr1,7,8,9, ...arr2];
    console.log(arr3);
}

spreadExample();