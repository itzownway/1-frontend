/**
 * Function as Object Property
 * 
 */

const object = {
    name : "Sanjay",
    //here anonymous function assign to disPlay variable
    disPlay: function () {
        console.log("Hello user");
    },


    // it is giving error -- remove the function keyword
    // function bye() {
    // }

    // internally bye itself  will be key 
      bye() {
        console.log("Bye");
      }
}

// console.log(object);
// console.log(object.disPlay());

// call the bye() function

console.log(object.bye());


 
