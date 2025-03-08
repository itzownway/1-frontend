/**
 * Filter
 */

arr = [1,2,3,4,5,6,7,8,9];

const output = arr.filter(number => number >5);
console.log(output);


function filterNumber(arr){
        const tempArr = [];
        for(let a of arr) {
            if(a>5){
            tempArr.push(a);
            }
        }
        return tempArr;
}


const result =filterNumber(arr);
console.log(result);