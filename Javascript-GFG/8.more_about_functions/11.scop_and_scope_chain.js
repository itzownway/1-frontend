/**
 * Scope and Scope chain
 */


let a = 3;


function x() {
    let b = 5;
    console.log(a);
    function y() {
        console.log(b);
        console.log({b});   // object type print 
    }
    y(); // y function is present in side the function x b is accessible by y
}

x();