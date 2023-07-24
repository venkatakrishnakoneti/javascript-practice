/* 
reduce() 
Reduces the array to a single value by applying a function to each element and accumulating the result
*/
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15