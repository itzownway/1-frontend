/**
 * Destructuring Array
 * 
 */



// Example - 1
// const numbers = [1,2,3];
// const [a,b,c, courses] = [1,2,3, ['html', 'css', 'js']];
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(courses);



// Example -2
// const arr = [1,2,3, ['html', 'css', 'js'], 5, 6];
// const [, , , frontend, a] = arr;
// console.log(a);
// console.log(frontend);


// Example - 3
const arr = [['html', 'css', 'js'],1,2,3, 5, 6];
const [frontend, ...rest] = arr;
console.log(rest);
console.log(frontend);


// Swap the Numbers using destructuring

function swapNumbers(a , b) {
   return [a , b] = [b, a];
}
const result = swapNumbers(10, 20);
console.log(result);