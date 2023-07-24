/*
objects are collections of key-value pairs, and they can have methods, which are functions defined as properties of an object. 
These methods can be called to perform actions or operations on the object's data
*/

// Object literal
const person1 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
  };
  
  console.log(person.fullName()); // Output: "John Doe"

// Method Using Shorthand Method Syntax (ES6)
const calculator = {
    add: function (a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b;
    },
  };
  
  console.log(calculator.add(5, 3));      // Output: 8
  console.log(calculator.subtract(10, 4)); // Output: 6
  
// Method Using Function Expression
const car = {
    brand: "Toyota",
    model: "Camry",
    honk: function () {
      return "Beep Beep!";
    },
  };
  
  console.log(car.honk()); // Output: "Beep Beep!"

  
// Method with Parameters
const circle = {
    radius: 5,
    area: function () {
      return Math.PI * this.radius * this.radius;
    },
    circumference: function () {
      return 2 * Math.PI * this.radius;
    },
  };
  
  console.log(circle.area());          // Output: 78.53981633974483
  console.log(circle.circumference()); // Output: 31.41592653589793
  
//   Method Using Arrow Function 
// (Note: Arrow functions do not have their own this context)
// hence we have to always use normal functions for methods

const person2 = {
    name: "Alice",
    greet: () => {
      return "Hello, my name is " + this.name; 
      // 'this' will not refer to the object correctly here
    },
  };
  
  console.log(person.greet()); // Output: "Hello, my name is undefined"

//   chaining of nethods

const textManipulator = {
    text: "Hello, World!",
    toUpperCaseAndExclaim: function () {
      this.text = this.text.toUpperCase() + "!";
      return this; // Return the object itself for method chaining
    },
    repeatTwice: function () {
      this.text = this.text + " " + this.text;
      return this; // Return the object itself for method chaining
    },
  };
  
  console.log(textManipulator.toUpperCaseAndExclaim().repeatTwice().text);
  // Output: "HELLO, WORLD! HELLO, WORLD!"  
