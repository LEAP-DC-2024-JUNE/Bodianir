//1
const numbers = [10, 20, 30, 40, 50]; // Note: Changed 'number' to 'numbers' for clarity
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
const average = sum / numbers.length;

console.log(average);