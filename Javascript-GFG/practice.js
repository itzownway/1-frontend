const input = require("readline-sync");
const first = input.question("Enter the Number You want Table");

for(let i=1; i<=10; i++) {
     console.log( i * first);
} 