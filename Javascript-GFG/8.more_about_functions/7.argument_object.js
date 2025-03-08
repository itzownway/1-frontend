/**
 * Arguments Object
 * 
 */

function calculateToast(a , b) {
    return a + b;
}

const total = calculateToast(4, 5);
console.log(total);


function calculate() {
   console.log(arguments);
}
calculate(4, 5, 6 , 7, 8);