/**
 * Arrow Function => ()
 *
 */

// simple 

function addition(x,y){
    return x+y;
}

// storing function in variable

const calculateSum = function(x,y){
    return x+y;
}

// making to arrow function 

// Fat  arrow function 

const calculate = (x,y)=> {
    return x+y;
}

// arrow function short hand 

const demo = (x,y)=> x + y;

//  Normal Function
function normalFunction(x,y){
    if(x>y){
     return x +y;
    } else{
     return x -y;
    }
 }


// Arrow function  with store to variable 
const operationCheck = (x,y) =>{
   if(x>y){
    return x +y;
   } else{
    return x -y;
   }
}


// arrow function short hand with ternary operator
const check = (x,y)=>x>y?x+y:x-y;
console.log(check(10,20));
