/**
 *   Recursion is a programming term where the function is called from itself.
 */

// Factorial Of numbers = 5


function factorialNumber(number)  {
       if (number == 1 ) {
        return number;
       }
       return number * factorialNumber(number-1);
}

const factNumber = factorialNumber(5);
console.log(factNumber);


// Additination of numbers

function additinationNumber(number1) {
    if (number1 == 1 ) {
        return number1;
       }
       return number1 + additinationNumber(number1-1);
} 

const result = additinationNumber(5);
console.log(result);
