/**
 *  Closuer
 */


function x() {
     let a = 5;
     function y () { 
        console.log(a);
     }
     return y;
}

let z = x();
z();