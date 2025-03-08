/**
 * Reduce
 * 
 */

const arr = [1,2,3,4,5,6,7,8,9,10];

// Example 1

const sum = arr.reduce((a,b) => a + b);
console.log(sum);

// Example 2

const reducerFunction = (acc, cur) => acc + cur;
// acc + cur
// 1 + 2 = 3   ----> acc
// 3 + 3 = 6   ----> acc
// 6 + 4 = 10  ----> acc
// 18 + 5 =15  ----> acc

const output = arr.reduce(reducerFunction,0); // here 0 is the acc value | if 0 is not passed then acc value will be taken as 1 from arr
console.log(output);