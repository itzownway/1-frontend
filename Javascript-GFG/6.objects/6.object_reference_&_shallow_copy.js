/**
 * Object Reference and Shallow Copy
 * 
 */


// Created a simple object datatype
const person1 = {
    name : "sanjay",
    age : 28
}
// console.log(person1);


// assigned the person1 object to person2 object
const person2 = person1;
// console.log(person2);


// changing the person2 data
person2.name = "Sujay";
// console.log(person2);


// check the person1 and person2  object values


/**
 *  Here person1 and person2 both object is refering to the same memory location
 * 
 *   so here it call as shallow copy
 */
// console.log(person1);    
// console.log(person2);




// Another way to copy the object  by - assign()
/**
 *  Here you may say it is deep copy  bcz both the object is refering to different memory location but still it is not deep copy
 */
const obj1 = {
    name : "Banglor",
    city : "USA"
}

const obj2 = Object.assign({}, obj1);
obj2.name = "Mithu";
obj1.city = "Gapabandhu Nagar";

// console.log(obj1);
// console.log(obj2);



//  Check the Deep Copy or Shallow Copy
 
const obj3 = {
    name : "Sanjay",
    city : "USA",
    age : {
        young : 20,
        old : 100
    }
}

const obj4 = Object.assign({}, obj3);
obj4.name = "?Kumar";
obj4.age.young = "26";
obj4.city = "Odisha";

console.log(obj3);
console.log(obj4);

// Here you can say we are the  nested objec so second level object value is same for both so still it is taking same memory reference so it is shallow copy not deep copy

// { name: 'Sanjay', city: 'USA', age: { young: '26', old: 100 } }
// { name: '?Kumar', city: 'Odisha', age: { young: '26', old: 100 } }