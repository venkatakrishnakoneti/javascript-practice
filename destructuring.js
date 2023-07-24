// Destructuring object
const person1 = {
    name1: 'John Doe',
    age1: 30,
    address1: {
        city1: 'New York',
        country1: 'USA',
    },
};

// Extracting values from the 'person' object
const { name1, age1, address1: { city1, country1} } = person1;

console.log(name1);    // Output: 'John Doe'
console.log(age1);     // Output: 30
console.log(city1);    // Output: 'New York'
console.log(country1); // Output: 'USA'  

// Destructuring array
const numbers = [1, 2, 3, 4, 5];

// Extracting values from the 'numbers' array
const [first, second, ...rest] = numbers;

console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(rest);   // Output: [3, 4, 5]

let a = 10;
let b = 20;

// Using destructuring assignment to swap the values of 'a' and 'b'
[a, b] = [b, a];

console.log(a); // Output: 20
console.log(b); // Output: 10

const person2 = {
    name2: 'Jane Doe',
    age2: 25,
};

// Extracting values with default values for missing properties
const { name2, age2, gender2 = 'Unknown' } = person;
console.log(name2);   // Output: 'Jane Doe'
console.log(age2);    // Output: 25
console.log(gender2); // Output: 'Unknown'

// Nested Destructuring in Function Parameters
function printAddress({ name, age, address: { city, country } }) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`City: ${city}`);
    console.log(`Country: ${country}`);
}

const person = {
    name: 'Bob',
    age: 35,
    address: {
        city: 'London',
        country: 'UK',
    },
};

printAddress(person);
  /* Output:
   Name: Bob
   Age: 35
   City: London
   Country: UK
*/

