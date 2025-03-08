// IndexOf 

const message = "I am become fullstack";
console.log(message.indexOf("b"));

// Pure Function
function findCharacter(text,char) {
     const index = text.indexOf(char);
     if(index==-1){
        return "not found";
     } else {
     return index;
     }
}

const result = findCharacter("I am sanjay","Z");
console.log(result);


// Arrow Function   - did not contain function and previously it is a anonymous function 
//                    which stored into find variable

const find = (text,char) => {
    const index = text.indexOf(char);
    if(index==-1){
       return "not found";
    } else {
    return index;
    }
}
//  Arrow function best practice is - ternary operator
const check = (text,char) => text.indexOf(char)==-1?"not found":text.indexOf(char);
console.log(check("Hello","o"));



// if indexOf()  -  not found any character it will return the -1 

function func1() {
   const disPlaymessage = "Trying to become a Fullstack Developer";
   console.log(`Find the index of character from string = ${disPlaymessage.indexOf("T",2)}`);
}

func1();



// Email Format Check


function emailFormatCheck(email, char) {
     const validate = email.indexOf(email,char);
     if(validate == -1) {
      return "Email Format is not Valid";
     } else {
      return `Email Format is Correct ${char} is Available in This Email ${email}`;
     }
}

const output = emailFormatCheck("itzsanjaykumardas@gmail.com","@");
console.log(output);