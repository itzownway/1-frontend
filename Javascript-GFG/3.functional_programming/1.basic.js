// function message(name) {
// console.log("function");
// console.log(name);
// }

// // message();

// message("Sanjay")


function caculateSum(min,max) {
    let sum=0;
    for(min=0; min<=max; min++){
        sum = sum+min;
    }
    console.log(`sum of ${min} to ${max} is ${sum}`);
}

caculateSum(1,10);