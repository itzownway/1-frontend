/**
 * 
 * pop  ---->
 * 
 * slice  ---->
 * 
 * 
 * splice -----> 
 * 
 */



// pop()
let arr1 = ['html', 'css', 'js', 'react', 'jquery'];
console.log(arr1.pop());
console.log(arr1);

// slice()

let value = arr1.slice(2,3);
console.log(value);


// splice()   - 3 start and delte 1 

let example = arr1.splice(3,1);
console.log(example);