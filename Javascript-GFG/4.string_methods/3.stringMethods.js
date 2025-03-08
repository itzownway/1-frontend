/**
 *  chartAt - return the specific index value
 *  
 *  charCodeAt - give the ASCII code  value of letter
 * 
 */

const message = "i a consistency is the key";
const index = message.length;
const char = message.charAt(index-1);
console.log(char);



const ascii = message.charCodeAt(char);
console.log(`ASCII code of ${char} is ${ascii}`);


function func() {

    // Original string
    var str = 'JavaScript is object oriented language';

    // Finding the character at given index 
    var value = str.charAt(0); 
    var value1 = str.charAt(4); 
    console.log(value); 
    console.log(value1);
}
func();


// JavaScript to illustrate charAt() function
function func1() {

    // Original string
    var str = 'JavaScript is object oriented language';

    // Finding the character at given index 
    var value = str.charAt(50);
    console.log("Char at index 50 is: "+value);    
}
func1();



// JavaScript to illustrate charCodeAt() method

function func2() {
    var str = 'ephemeral';

    // Finding the code of the character at
    // given index 
    var value = str.charCodeAt(4);
    console.log(value);    
}

func2();


// JavaScript to illustrate charCodeAt() method

function func3() {
    var str = 'ephemeral';

    // Finding the code of the character 
    // at given index 
    var value = str.charCodeAt(20);

    console.log(value);    
}
func3();