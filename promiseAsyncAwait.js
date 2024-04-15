function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = "Data fetched successfully";
        resolve(data); // Resolving the Promise with data
      }, 2000);
    });
  }
  
  fetchData()
    .then((data) => console.log(data)) // Output: "Data fetched successfully"
    .catch((error) => console.log(error));

//  using Async Await     
      async function fetchAsyncData() {
        try {
          const data = await fetchData(); // Wait for the Promise to resolve
          console.log(data); // Output: "Data fetched successfully"
        } catch (error) {
          console.log(error);
        }
      }
      
      fetchAsyncData();

/*
Main Differences:

    Syntax: Promises use then() and catch() to handle resolved and rejected states. 
    Async/await uses a more synchronous-like syntax, making the code easier to read and maintain.
    
    Error Handling: In Promises, errors are handled using the catch() method. 
    With async/await, you can use a try...catch block for error handling.
    
    Chaining: Promises are typically chained using multiple then() methods. In contrast, 
    async/await allows you to write linear code flow with less indentation, making it look more like synchronous code.

    Error Handling in Asynchronous Code: With Promises, errors in nested asynchronous code can be harder to manage. 
    Async/await simplifies error handling in nested asynchronous operations.
*/