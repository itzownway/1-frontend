/**
 * Optional Chaining
 * 
 */

const user = {
    name : "Sanjay",
    age : 29,
    address : {
        home : "Odisha",
        village : "Gapabandhu Nagar"
    },
    links : "Eat Sleep Repeat"
}

// console.log(user.address.home);
// console.log(user.demo);   -------> it will give the undefined  

// if(user.address !==undefined) {
//     console.log(user.address.village);
// } else {
//     console.log("address not found")
// }


// Optional Chaining

const user1 = {
    name : "Sanjay",
    age : 29,
    // address : {
    //     home : "Odisha",
    //     village : "Gapabandhu Nagar"
    // },
    links : "Eat Sleep Repeat"
}

// console.log(user1.address); // it will give undefined
// console.log(user1.address.home);  // it will give the error

// to avoid the error  of this code - console.log(user1.address.home);
console.log(user1.address?.home);// here home is not found inside address bcz address it self giving the undefined so next value it will not get (here option chaining is working to handle the error)