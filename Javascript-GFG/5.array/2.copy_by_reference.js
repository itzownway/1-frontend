/**
 * Copying an Array --> Array Reference
 */


let arr1 = [1,2,3,4];   // let see it is taking memory location = abc
let arr2 = arr1;        // it is also pointing/refering to the same memory location = abc

// shallow copy 


console.log("Array-1=",arr1);
console.log("Array-2=",arr2);

arr2.push(5);

// here 5 is pushed to arr2 but not into arr1   but it automatically pushed to arr1 also due to same memory location
console.log(arr1);
console.log(arr2);



// Spread Operator to avoid the - same memory location after copying the array value

function spreadOperatorExample() {

    let ar1  = [1,2,3,4,5];
    let ar2  = [1,2,3,4,5];
    let ar3 = [...ar1];
    let ar4 = [...ar2];

    ar3.push(10);

    console.log(`Array 1 Values${ar1}`);
    console.log(`Array 3 Values${ar3}`);
    console.log(`Array 4 Values${ar4}`);

}

spreadOperatorExample();