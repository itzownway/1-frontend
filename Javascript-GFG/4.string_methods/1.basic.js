
// iterate through the loop 


let message = "I am Fullstack";

for(let char of message){
    if(char=='m'){
        console.log(char);
    }
}


// count the repeatation of in message string a

let count=0;

for(let char of message){
    if(char=='a'){
        count++;
    }
}
console.log(count);


console.log(message[5]);




let countRepeatLetter = "Debug the code properly with Docs and Standard Way";
let repeat =0;
for(let char of countRepeatLetter) {    
    if( char == "a") {
       repeat++;
    }
}

console.log(`Number of "a" present inside ${countRepeatLetter} is = ${repeat}`);
