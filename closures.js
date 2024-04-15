/*
A closure is a function that retains access to variables from its outer (enclosing) scope even after the outer function has finished executing. 
This behavior allows the inner function to "remember" and access those variables whenever it is called, even if the outer function's execution context is no longer active.
*/
/*In this example, the innerFunction is a closure because it captures the outerVariable from its outer scope (the outerFunction). Even after outerFunction has completed execution, the closureFunction still remembers and can access the outerVariable.
*/
function outerFunction() {
  const outerVariable = "I am from the outer function";
  function innerFunction() {
    console.log(outerVariable); // Accessing the outer variable
  }
  return innerFunction;
}
const closureFunction = outerFunction();
closureFunction(); // Output: "I am from the outer function"