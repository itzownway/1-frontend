/**
 * Array
 */

let s1 = "Sanjay";
let s2 = "Sujay";
let s3 = "Networking";
let s4 = "Hacking";


// let studentName = ['Sanjay','Sujay','Networking','Hacking',1,2,3,4,['HTML','CSS','Js'],{subject:"Bug-Bounty"}]; 

// here it will store array of array and number and object also

// console.table(studentName);
// console.log(studentName);

let studentName = ['Sanjay','Sujay','Networking','Hacking'];
// console.log(studentName[0]);




/**
 * loop the array using for
 */
for(let i=0; i<studentName.length; i++){
    console.log(studentName[i]);
}


// loop the array using foreach

/**
 * of will give the value 
 */
for(let name of studentName){
    console.log(name);
}

/**
 *   it will give the index 
 */
for(let index in studentName){
    console.log(index);
}

for(let index in studentName){
    console.log(studentName[index]);
}
