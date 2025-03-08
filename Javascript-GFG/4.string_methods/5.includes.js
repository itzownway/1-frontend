/**
 *  includes - it will give result in - true or false
 */



// Check the Given Character is Present in the name 
function checkGivenString(firstName) {
    const name = "Sanjay Kumar Das";
    const firstNamePresent = name.includes(firstName);
    if(firstNamePresent) {
        return `${firstName} is present in ${name}`;
    } else {
        return `${firstName} is not Present in ${name}`;
    }

}

const output = checkGivenString("Sanjay");
console.log(output);



//  Check the Vowels present in Name and print the vowels


function checkVowels(name) {
    const vowels = "aeiou";
    for(let char of name) {
        if(vowels.includes(char)) {
             console.log(`Vowels ${char}`);
        }
    }
}

const result = checkVowels("Sanjay Kumar Das");