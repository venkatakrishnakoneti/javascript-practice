const arr1 = [1, 2, 3];
const arr2 = [4, 5];

// Combining arrays with spread operator
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5]

const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };

// Merging objects with spread operator
const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject); // Output: { x: 1, y: 2, z: 3 }