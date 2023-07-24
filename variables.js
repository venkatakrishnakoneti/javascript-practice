// Using 'let' to declare a variable with block scope
let x = 10;
if (true) {
  let x = 20;
  console.log(x); // Output: 20 (inner scope)
}
console.log(x); // Output: 10 (outer scope)

// Using 'const' to declare a constant with block scope
const PI = 3.14;
// PI = 3.14159; // Error: Assignment to constant variable.
