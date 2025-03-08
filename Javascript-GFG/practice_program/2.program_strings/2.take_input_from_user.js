function getLine() {
    let str = readLine();
    return str;
}

console.log(getLine);


function input() {
    const input = require('readline-sync');
    return input.question("Enter Your Input");
}
input();