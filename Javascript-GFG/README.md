# Javascript by GFG

### syllabus

    - Basic of JavaScript (11)
               |
               |-- Introduction 
               |-- Setup IDE - VS Code Installation
               |-- First program - Hello Geeks
               |-- JavaScript Variables
               |-- Difference between var, let and const
               |-- Data types - JS
               |-- Concatenation and Template Literal
               |-- Arithmatic Operators - JS
               |-- Type conversion
               |-- ReadlineSync
    
    - JavaScript Fundamentals (16)
               |
               |-- Comparison Operators
               |-- Conditional Statements
               |-- Nested Conditional Statement
               |-- Conditional Statement Exercise
               |-- Ternary Operator - Part-1
               |-- Ternary Operator - Part-2
               |-- Logical Operator - Part-1
               |-- Logical Operator - Part-2
               |-- Logical Operator - Part-3
               |-- Nullish Coalescing 
               |-- Loops - for loop
               |-- Nested For Loop
               |-- Exercise - For Loop
               |-- Loops - while loop
               |-- Exercise - while loop
               |-- Error Handling - try and catch

    - Functional Programming (6)
               |
               |-- Function declaration
               |-- Anonymous Function & Function Expression
               |-- Return and undefined
               |-- Arrow Function
               |-- Function Exercise
               |-- Working with Map and Set collections

    - String Methods(7)
               |
               |-- Iterating over String
               |-- String Method - charAt & charCodeAt
               |-- String Method - indexOf
               |-- String Method - includes
               |-- String Method - toUpperCase & toLowerCase
               |-- String Method - substring
               |-- String Method - trim
               
    - Arrays (9)
           |
           |-- Iterating Over Array
           |-- Array Method - Push & Concat
           |-- array Method - pop, splice
           |-- Array Method - includes
           |-- Array Method - sort
           |-- split and join
           |-- Spread Array
           |-- Destructuring Array

    - Objects (14)
           |
           |-- Object Properties
           |-- Function as Property
           |-- Computed Properties
           |-- Property Shorthand
           |-- for in
           |-- Object Reference & Shallow Copy
           |-- Optional Chaining
           |-- Destructing Object
           |-- Keys,values & entries
           |-- 'this' keyword
           |-- Constructor "new"
           |-- Function Borrowing - Call and Apply
           |-- Function Borrowing - Bind
           |-- 'this' keyword - exercise
           
    - Modules (3)
           |
           |-- Moduels Intro
           |-- Understanding Javascript moduels
           |-- Using Dynamic Imports

    - How JS works - Behind the Scenes (5)
                |
                |--- Execution Context
                |--- How JS Execute Code
                |--- Call Stack
                |--- Hoisting - var & function
                |--- Hoisting - let , const and TDZ
                
    - Functionas basic to advanced, Closure (12)
                 |
                 |-- Pure Functions
                 |-- First Class Functions
                 |-- Higher Order Function
                 |-- map
                 |-- filter
                 |-- reduce
                 |-- Argument Obbject
                 |-- Rest Parameter
                 |-- Variable Scope - Global, Local and Block Scope
                 |-- Scope and Scope Chain
                 |-- Recursion
                 |-- Closure


    - Coding Drills -1 (11)
               |
               |-- Palindrome String
               |-- Remove Vowels from String
               |-- Mask Characters
               |-- Encoded Characters
               |-- Sub String
               |-- Convert Odd t Even & Vice Versa
               |-- Find Sum of Number Less Than 40
               |-- Return Array of Names From An Object - Chaining Methods
               |-- Generate an Object with Sum of Even and Odd Numbers From an Array of Numbers
               |-- Find Average Age of Family Members
               |-- Count Distinct Elements
      
    - Document Object Model - DOM
               |
               |-- What is DOM ?
               |-- Searching the DOM
               |-- Event Listener Part -1
               |-- Event Listener Part -2
               |-- Event Listener Part -3
               |-- Bubbling & Capturing
               |-- Event Delegation
               |-- Creating HTML with JavaScript
               |-- Async and Defer
 
    - Browser Object Model(BOM) (3)
               |
               |-- Introduction to BOM
               |-- Window Object
               |-- SetTimeout, SetInterval and clearInterval, clearTimeout

    - Projects (4)
          |
          |-- Quizify - CLI Quiz App
          |-- Wishlist App
          |-- Form Validation
          |-- Notes App

    
    - Capstone: Flash Ecommerce Project (6)
          |
          |-- Product Listing Page
          |-- Navbar
          |-- Cart Page
          |-- Horizental Card
          |-- Price Component
          |-- Filters

     - Polyfills (6)
          |
          |-- polyfills for Map
          |-- polyfills for Filter
          |-- polyfills for Reduce
          |-- polyfills for flatten
          |-- polyfills for Call & Apply
          |-- polyfills for Bind


     - Asynchronous JavaScript (10)
          |
          |-- Callbacks
          |-- How Async JS Works
          |-- Callback Hell
          |-- Promise
          |-- Creating a Promise
          |-- Method Chaining
          |-- Promise API - Promise.all()
          |-- Promise API - Promise.allSettled()
          |-- Promise API - Promise.race() v/s Promise.any()
          |-- async/await

     - Coding Drills - 2 (3)
          |
          |-- Arrange Words In Ascending Order of Length
          |-- Reverse words of a string without changing their order
          |-- Count the frequency of elements in an Array

     - Interview Problems - Machine Coding
          |
          |-- Stop Watch Timer
          |-- Debouncing
          |-- Throttling
          |-- Modal
          |-- Carousel
          |-- Deep Copy
          |-- Drop Down

     - Advanced Projects
          |
          |-- Moive App
          |-- Recipe App
          |-- Quiz App

     - Classes 
          |
          |-- Prototype
          |-- Bascis of Classes
          |-- Classes Inheritance
          |-- Static properties and methods - JS
          |-- private properties
          
    - Assignments


    - Projects
          |------- Custom Video Player from Scratch
          |------- Online Quiz Platform
          |------- Build a Simple Image Editor Webpage
          |------- Custom Form Builder Webpage
          |------- 2048 Game





JavaScript Notes
------------------


### Variables 

     - store information or data
     
     - why variable
     - what is variable
     - various way to create variable



        e.x -  var message = "Hello"; // declaration and assign the value 
               var message = "Hye";

             var text ; // declare 
             text = 20; // assign 


#### var, let and const

     var
     -----  
          var message = "hye";    //  declare and assign 
          var message = "Hello"; // re-declare

          var message;     // declare
          message = "hye"; // assign

     let
     -----
         let text = "By"; // declare
         text = "cool"; // assign

         let text = "code"; // declare and assign 
         let text = "javascript"; // re-declare (not possible) 

     const
     -------
          const age = 90;
          age = 70; // not possible 
          const age = 60; // not possible 


    i)  var - declare, assign and re-declare  the variable 
    ii) let - declare, assign but re-declare not possible  
    iii) const - declare but assign and re-declare is not possible 
          
          
#### Scope

      - Global  
            |-- variables can be accessed from anywhere in a JavaScript program.
            |-- variables declared Globally (outside any block or function) have Global Scope.

      - Function 
          |--- variables defined inside a function are not accessible (visible) from outside the function.
          |--- variables declared within a JavaScript function, are LOCAL to the function:
      
      - Block
          |-- variables declared with let and const inside a code block are "block-scoped," meaning they are only accessible within that block.


#### Variables Naming Convention

    - declare using 
                |---- alphabets
                |---- underscore
                |---- dollat sign
                |---- can not declare with number

                
### Datatypes 

        - primitive (single value assign to variable)
             |
             |---- String 
             |---- Number
             |---- Boolean 
             |---- Undefind  ---- declared but value is not assign (e.g - let a;)
             |---- null --------- (let value =null)
             |---- NaN (E.g - let a ="heelo"; let b ="bye"; console.log(a*b)) 

        - Non-primitive (multiple values assign to a variable)
               |
               |------ objects (E.g - const data = {} or [];
                         |
                         |--------- e.g - {name : "A", age=200, {}, []}
                         
#### Concatenation and Template Literal

          - ${}  
             (E.g 
                  - let name = "sanjay"; 
                  - let message = 'name is ${name}';
                  
####  Operator In JavaScript

         1)  Arithmetic Operators: Used to perform mathematical operations.

         2) Assignment Operators: Used to assign values to variables.

         3) Comparison Operators: Used to compare two values and return a boolean (true or false) result. 

         4) Logical Operators: Used to combine or manipulate boolean values. 

         5) Bitwise Operators: Operate on the binary representation of numbers.

         6) String Operators: Primarily used for string concatenation.

         7) Null Coalescing (E.g - let value ?? "default value";)

#### Type Conversion

         const a = "Sanjay";
         const b = "Kumar Das"; 

         const c = Number(a);
         const d = Number(b);


#### ReadlineSync (take input from user by terminal - npm i readline-sync)

          const readlineSync = requre("readline-sync");
          readlineSync.question("Enter the Value");
          

         
### JavaScript Fundamentals 

         Control Structure
                   |
                   |-------- Conditional (Ternary Operator - (E.g - condition ? yes : no ))
                   |
                   |-------- Repetational 
                   |
                   |-------- Jumping 
                   |
                   |-------- Switching 


#### Error Handling - try , catch and finally 

        E.g - 
              try {
                     // some line of codes
                     //
               } catch(error) {
                    console.log(e);
               } finally {
                 // 
               }
                 
            
### Functional Programming 

#### Function Declaration

        - What is function 
                       |------- a function is a block of reusable code designed to perform a specific task.


        - Parameter and Argument
                                           |-------------- parameter
               E.x -     function message(name) {
                             console.log("Sanjay Kumar Das");
                             }                         |---------- argument 

        -  normal function can be called before and after declaration of function                      


#### Anonymous Function & Function Expression

        - What is Anonymous Function
                             |--------  a function that is not declared with a name


         E.x = 
                    function anonymousFunction() {
                        console.log("anonymous function ");       // this is an anonymous function 
                    }

         - Anonymous Function Assign to a Variable 

            E.x =
              let anonymousFunction = function () {
                console.log("anonymous function assign to variable");
               }

               
         - Anonymous function can be only called after the declaration of function bcz as it is assign to variable 


    Function Expression
    -------------------
        - Have a variable and assign function to it call as function expression 
                    
         E.x =                                |--------------------------- here function did not have name
              let anonymousFunction = function () {
                console.log("anonymous function assign to variable");
               }

    Name Function Expression
    ------------------------
          - Have a variable and assign a name function to it call as Name function expression 
          
             E.x =                                |-------------------- name of function 
              let anonymousFunction = function nameFunction() {
                console.log("anonymous function assign to variable");
               }


  note :- Anonymous Function only can be access and call be Variable name (not by function name)     
                             

#### Return and undefined 

         - What Pure Function
                        |---------- function always accept the parameter and return a value also did not change the data types even did not change the value 


           E.x = 
                  function calculateSum(x, y) {
                     return x + y ;
                  }  

                  const result = calculateSum(10, 20);
                  console.log(result);
                  

#### Arrow Function




#### Map and Set Collection




          




                      
    

          
          
             
             

               


     















     




