/**
 *  Array sort
 */



// sort the string 
const fruits = ["apple", "cherry" , "banana", "graphes", "mango", "berry"];
fruits.sort();
console.log(fruits);


// sort the numbers   ---> here we will not get the proper sequence 
const numbers = [4,1,2,3,11,22,5,76,7,9];
console.log(numbers.sort());

// sort by ascending
function sortInAscendingOrder(a , b) {
   return a - b;
}

numbers.sort(sortInAscendingOrder);
console.log(numbers);

// sort in descending
function sortInDscendingOrder(a , b) {
    return b - a;
 }

numbers.sort(sortInDscendingOrder);
console.log(numbers);