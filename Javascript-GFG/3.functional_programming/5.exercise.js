/**
 *  Sum of all numbers from 1-10
 *
 */

// Normal function way
function sumOfMinMax(min,max){
    let sum = 0;
    for(min=0; min<=max; min++){
        sum = sum+min;
    }
    return sum;
}

const result = sumOfMinMax(1,10);
console.log(result);

// Arrow function Way with Anonymous function

const sum = (x,y)=> {
    let sum = 0;
    for(x=0; x<=y; x++){
        sum = sum+x;
    }
    return sum;
}
console.log(sum(1,10));

