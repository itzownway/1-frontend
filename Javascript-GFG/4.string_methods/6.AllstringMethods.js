/**
 *  uppercase() and lowercase()
 *
 */


const message = "Consistency Break Everything";

console.log(message.toLowerCase());
console.log(message.toUpperCase());


function checkVowels(name) {
    let flag = false;
    let vowels = "aeiou";
    for(let char of message) {
        if (vowels.includes(char.toLocaleLowerCase())) {
         return flag = true;
        } else {
            return flag;
        }
    }
}

const output = checkVowels("Sanjay Kumar Das");
console.log(output);


