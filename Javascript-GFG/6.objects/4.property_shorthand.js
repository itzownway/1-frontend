/**
 * 
 * Shot Hand Property
 * 
 * 
 */



function getObject(name , city) {
   return {
    name : name,
    city : city
   }
}
console.log(getObject("Sanjay", "Banglore"));


// short hand property of above code
function getObjectByShortHand(name , city) {
    return {
     name,
     city
    }
 }
 console.log(getObjectByShortHand("Sanjay", "Banglore"));



 // Short hand property ex-1

 const age = 44;
 const student = "Sanjay";
 const course = "Js";
 console.log({age,student,course});  // Op - { age: 44, student: 'Sanjay', course: 'Js' }


