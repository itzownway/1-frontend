/**
 * Function Borrowing - Call and Apply
 */


const user1 = {
    name : "sanjay",
    age : 90,
    // sayHi : function () {
    //     console.log(this.name)
    // }

  // Implicit Binding
    displayMessage : function () {
        console.log(this.age);   //  this is point to user1 object
    }
}

const user2 = {
    name : "sanjay",
    age : 90,
    // sayHi : function () {
    //     console.log(this.name)
    // }
}

const user3 = {
    name : "sanjay",
    age : 90,
    // sayHi : function () {
    //     console.log(this.name)
    // }
}



// outside object scope
function sayHi() {
    console.log(this.name);
}

//user1.sayHi();   ---> user1 object did not have sayHi function so it will give the error

// now borrow function concept user1, user2 and user3 can borrow the sayHi function
/**
 *   - call
 *   - apply 
 *   - bind
 */


// Explicit Binding 

// Example of  = call()

// sayHi.call(user1);  // the value of this is user1
// sayHi.call(user2);  // the value of this is user2
// sayHi.call(user3);  // the value of this is user3


// if want to append other fields (object can borrow the function)

function sayHello(degree, year) {
    console.log(this.name, degree, year);
}

sayHello.call(user1, "B-Tech", 2016);  // the value of this is user1
sayHello.call(user2,"B-Tech", 2016);  // the value of this is user2
sayHello.call(user3,"B-Tech", 2016);  // the value of this is user3



// Example of = apply()    -- apply contains the two parameters

sayHi.apply(user1);
sayHi.apply(user2);

// Here you can notice that parameter passing is difference as compare to call() function
sayHello.apply(user1,['B-Tech', 2016]);
sayHello.apply(user1,['CSE', 2016])


// Example of = bind()   