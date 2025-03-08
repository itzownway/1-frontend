// const obj = {
//     name : "Sanjay",
//     address : {
//         home : "Odisha",
//         village : "Gapabandhu Nagar"
//     },
//     courses : ['html', 'css', 'js']
// }

// let {name, address, courses} = usobjer;
// console.log(address);


// destructuring  address

// let {name, address:{home, village}, courses} = obj;
// console.log(address);  // it will give the error bcz we already destructuring the address
// console.log(home);




// Example -2


const employee = {
      engineers : {
        en1 : {
            id : 1,
            name : "Sanjay",
            occupation : "Backend"
        },
        en2 : {
            id : 2,
            name : "Kumar",
            occupation : "FrontEnd"
        },
      },
      placemetns : {
        en3 : {
            id : 3,
            name : "Das",
            occupation : "DevOps",
            achievements : {
                first : "cup",
                second : "ball",
                third : "table"
            }
        }
      },
      youtube : {
        en4 : {
            id : 4,
            name : "Sanjay Kumar Das",
            occupation : "Full-Stack"
        },
      }

}

// let {engineers: {en2 : {name, occupation}}} = employee;
// console.log(name, occupation);


// let {youtube} = employee;
// console.log(youtube);


let {youtube:{en4: {name, occupation}}} = employee;
console.log(name, occupation);