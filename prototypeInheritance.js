/*
In this example, the Animal function serves as the parent constructor. The Dog function is the child constructor and uses Object.create() to inherit the prototype of Animal, establishing a prototypal inheritance relationship. 
The Dog prototype now has access to both sayHello() from Animal and its specific method bark(). When we create an instance of Dog, it inherits properties and methods from both its own prototype and the Animal prototype.
*/

// Parent constructor function
function Animal(name) {
    this.name = name;
  }
  
  // Adding a method to the Animal prototype
  Animal.prototype.sayHello = function () {
    console.log(`Hello, I'm ${this.name}.`);
  };
  
  // Child constructor function
  function Dog(name, breed) {
    Animal.call(this, name); // Call the parent constructor to set the 'name' property
    this.breed = breed;
  }
  
  // Inherit from Animal's prototype
  Dog.prototype = Object.create(Animal.prototype);
  
  // Set the constructor property correctly for Dog
  Dog.prototype.constructor = Dog;
  
  // Adding a method specific to Dog
  Dog.prototype.bark = function () {
    console.log("Woof! Woof!");
  };
  
  // Create an instance of Dog
  const dog1 = new Dog("Buddy", "Labrador");
  
  dog1.sayHello(); // Output: "Hello, I'm Buddy."
  dog1.bark();     // Output: "Woof! Woof!"
  