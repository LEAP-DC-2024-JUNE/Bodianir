const numbers = [2, -3, 5, 6, -8, 10];

// Find even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log('Even Numbers:', evenNumbers);

// Calculate the average of the original array
const sum = numbers.reduce((acc, num) => acc + num, 0);
const average = sum / numbers.length;

console.log('Average of all numbers:', average);

