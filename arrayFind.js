/*
 Finds the first element that satisfies ehe callback function
*/
const numbers = [1, 2, 3, 4, 5];
const firstEvenNumber = numbers.find((num) => num % 2 === 0);
console.log(firstEvenNumber); // Output: 2