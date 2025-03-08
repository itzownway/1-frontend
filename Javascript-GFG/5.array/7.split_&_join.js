/**
 * 
 * split and join 
 * 
 */


// split 

const str = "madam";
const arrOfChar = str.split();
console.log(arrOfChar);


// return string any array with space of each character
const arrOfCharBySpace = str.split("");
console.log(arrOfCharBySpace);



//  check the palindrome   - madam   ---> madam

const reverse = arrOfCharBySpace.reverse();
console.log(`Reverse of ${str} is ${reverse}`);



// join
console.log(`join the space of array charcter into string by join ${reverse.join("")}`);




