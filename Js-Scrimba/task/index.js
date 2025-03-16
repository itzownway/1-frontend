// Create two variables, firstName and lastName

// Concatenate the two variables into a third variable called fullName

// Log fullName to the console


let firstName = "Sanjay"
let lastName = " Das"

const fullName = firstName + lastName

console.log(fullName)


let name = "Linda"
let greeting = " Hi there "

// Create a function that logs out "Hi there, Linda!" when called

function printData() {
    console.log(greeting + name)
}

printData()


let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

function add3Points() {
    myPoints +=3;
}


function remove1Point() {
    myPoints -= 1;
}

add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()

// Call the functions to that the line below logs out 10
console.log(myPoints)



//-------------------------------------------
// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards



// let firstCard = 4;
// let secondCard = 10;

// let sum = firstCard + secondCard;

// console.log(sum)



//-------------------------------------------


// let firstCard = 6
// let secondCard = 9
// let sum = firstCard + secondCard

// if (sum < 21) {
//     console.log("Do you want to draw a new card? 🙂")
// } else if(sum === 21) {
//     console.log("Wohoo! You've got Blackjack! 🥳")
// } else if(sum > 21) {
//     console.log("You're out of the game! 😭")
// }

//-------------------------------------------


// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

// let age = 22

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"


// if(age < 22) {
//     console.log("Welcome!")
// } else {
//     console.log("You can not enter the club!")
// }



//-------------------------------------------
// Check if the person is elegible for a birthday card from the King! (100)

let age = 100

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

if(age < 100) {
    console.log("Not elegible")
} else if(age === 100 ) {
    console.log("Here is your birthday card from the King!")
} else {
    console.log("Not elegible, you have already gotten one")
}


//-------------------------------------------



let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard

// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"


if(sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if(sum === 21) {
  console.log("Wohoo! You've got Blackjack! 🥳")
} else {
    console.log("You're out of the game! 😭")
}

//----------------boolean ---------------------------

let isVegan = true
console.log(isVegan)


let hasDiscountCode = true

function processOrder() {
    if (hasDiscountCode) {
        console.log('Discount applied to food order')
        hasDiscountCode = false
    } else {
        console.log('No discount applied')
    }
}

processOrder()
processOrder()