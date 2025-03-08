/**
 *  smallest string
 * 
 */

const firstString = "apple";
const secondString = "banana";
const thirdString = "watermelon";

const length1 = firstString.length;
const length2 = secondString.length;
const length3 = thirdString.length;

if(firstString < secondString && firstString < thirdString){
    console.log(`${firstString} is Smallest`);
} else if(secondString< thirdString && secondString<firstString){
     console.log(`${secondString} is smallest`);
} else{
    console.log(`${thirdString} is smallest`);
}