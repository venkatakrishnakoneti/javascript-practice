const numbers = [1, 2, 3, 4, 5, -2];
// Checks if every element is positive
console.log(numbers.every((num) => num > 0))
// Checks if atleast one element is negative
console.log(numbers.some((num) => num < 0))