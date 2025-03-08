// Creating a data set

let readlineSync = require("readline-sync");
let kuler = require("kuler");
let score = 0;
let userName = readlineSync.question("What's your name? ");
console.log(kuler(`Hello ${userName}! Welcome to Quizify`, "#d946ef"));

// Database for Question and Answers
const database = {
  data: [
    {
      question: "Is JavaScript Support Inheritance?",
      Options: {
        a: "Yes",
        b: "No",
      },
      correctAnswer: "a",
    },
    {
      question: "Object.assign(target, source) creates which type of copy?",
      Options: {
        a: "Shallow Copy",
        b: "Deep Copy",
        c: "Nested Copy",
        d: "Create a Reference",
      },
      correctAnswer: "a",
    },
    {
      question: "Is Method chaining possible using forEach?",
      Options: {
        a: "Yes",
        b: "No",
      },
      correctAnswer: "b",
    },
    {
      question: "What does 'NaN' stand for?",
      Options: {
        a: "Not a Number",
        b: "Not a Name",
        c: "Not a Null",
        d: "Not a Negative",
      },
      correctAnswer: "a",
    },
    {
      question: "What is the result of 'typeof null'?",
      Options: {
        a: "null",
        b: "undefined",
        c: "object",
        d: "number",
      },
      correctAnswer: "c",
    },
    {
      question: "Which operator is used to combine two or more strings?",
      Options: {
        a: "+",
        b: "&",
        c: "|",
        d: "&&",
      },
      correctAnswer: "a",
    },
    {
      question: "What does the Array.prototype.map() method do?",
      Options: {
        a: "Mutates the original array",
        b: "Returns a new array with the results of calling a provided function on every element in the array",
        c: "Adds a new element to the beginning of an array",
        d: "Removes the last element from an array",
      },
      correctAnswer: "b",
    },
    {
      question: "What is the output of 2 + '2'?",
      Options: {
        a: "22",
        b: "4",
        c: "NaN",
        d: "TypeError",
      },
      correctAnswer: "a",
    },
    {
      question:
        "Which method is used to remove the last element from an array and return that element?",
      Options: {
        a: "pop()",
        b: "push()",
        c: "shift()",
        d: "unshift()",
      },
      correctAnswer: "a",
    },
    {
      question:
        "What is the purpose of the 'use strict' directive in JavaScript?",
      Options: {
        a: "To enable strict mode, which catches common coding mistakes and 'unsafe' actions",
        b: "To indicate that the script should be executed in a strict, secure environment",
        c: "To disable certain JavaScript features for performance optimization",
        d: "To allow the use of experimental JavaScript features",
      },
      correctAnswer: "a",
    },
    {
      question: "What is the value of Math.PI?",
      Options: {
        a: "3.14",
        b: "3.1416",
        c: "3.14159265359",
        d: "3.141592653589793",
      },
      correctAnswer: "d",
    },
    {
      question: "Which keyword is used to declare variables in JavaScript?",
      Options: {
        a: "var",
        b: "let",
        c: "const",
        d: "variable",
      },
      correctAnswer: "a",
    },
    {
      question: "What will the code 'console.log(0.1 + 0.2 === 0.3);' print?",
      Options: {
        a: "true",
        b: "false",
        c: "TypeError",
        d: "undefined",
      },
      correctAnswer: "b",
    },
    {
      question: "What does JSON stand for?",
      Options: {
        a: "JavaScript Object Notation",
        b: "JavaScript Object Navigator",
        c: "JavaScript Object Naming",
        d: "JavaScript Oriented Notation",
      },
      correctAnswer: "a",
    },
    {
      question: "What does the 'new' keyword do in JavaScript?",
      Options: {
        a: "Creates a new instance of a class",
        b: "Creates a new variable",
        c: "Creates a new scope",
        d: "Creates a new function",
      },
      correctAnswer: "a",
    },
    {
      question: "What does the '&&' operator do in JavaScript?",
      Options: {
        a: "Logical OR",
        b: "Logical AND",
        c: "Bitwise OR",
        d: "Bitwise AND",
      },
      correctAnswer: "b",
    },
    {
      question: "What does the '||' operator do in JavaScript?",
      Options: {
        a: "Logical OR",
        b: "Logical AND",
        c: "Bitwise OR",
        d: "Bitwise AND",
      },
      correctAnswer: "a",
    },
    {
      question: "What does the Array.prototype.reduce() method do?",
      Options: {
        a: "Reduces the array to a single value by executing a provided function for each value",
        b: "Adds a new element to the end of an array",
        c: "Removes the first element from an array",
        d: "Joins all elements of an array into a string",
      },
      correctAnswer: "a",
    },
    {
      question: "What is the result of '5 == '5'?",
      Options: {
        a: "true",
        b: "false",
        c: "TypeError",
        d: "undefined",
      },
      correctAnswer: "a",
    },
    {
      question: "What is the result of '5 === '5'?",
      Options: {
        a: "true",
        b: "false",
        c: "TypeError",
        d: "undefined",
      },
      correctAnswer: "b",
    },
    {
      question:
        "Which method is used to sort the elements of an array in place and returns the sorted array?",
      Options: {
        a: "sort()",
        b: "sorted()",
        c: "order()",
        d: "arrange()",
      },
      correctAnswer: "a",
    },
  ],
};

// Logic to Check the Correct and InCorrect Answer
function playGame(userAnswer, correctAnswer) {
  if (userAnswer == correctAnswer) {
    console.log(kuler("Correct Answer", "#84cc16"));
    score++;
  } else {
    console.log(kuler("InCorrect Answer", "#e11d48"));
    console.log(kuler(`Correct Answer Is -  ${correctAnswer}\n`, "#84cc16"));
  }
}

// Creating the Leader Board
const leaderBoard = {
  data: [
    {
      name: "Sanjay",
      score: 1,
    },
    {
      name: "Gopal",
      score: 2,
    },
    {
      name: "Sujay",
      score: 3,
    },
  ],
};

function showQuestionAndOptions() {
  for (let i = 0; i < database.data.length; i++) {
    console.log(`Q${i + 1} - ${database.data[i].question}\n`);

    for (let key in database.data[i].Options) {
      console.log(`${key} - ${database.data[i].Options[key]}\n`);
    }
    let userAnswer = readlineSync
      .question("Enter your answer - (a,b,c,d) -  ")
      .toLocaleLowerCase();
    playGame(userAnswer, database.data[i].correctAnswer);
  }
}

// Check Your Position on Leader Board
function highScorer(leaderBoard) {
  leaderBoard.data.push({ name: userName, score: score });
  let sortedScoreList = leaderBoard.data.sort((a, b) => b.score - a.score);
  console.log("\nCheck Your Position on the LeaderBoard");
  for (let leader of sortedScoreList) {
    console.table(kuler(`${leader.name} - Score: ${leader.score}`, "#2dd4bf"));
  }
}

// Main function to execute the quiz
function main() {
  showQuestionAndOptions();
  console.log(kuler(`Total Correct Answer You Given - ${score}\n`, "#22d3ee"));
  highScorer(leaderBoard);
}

// Calling the main function to start the quiz
main();