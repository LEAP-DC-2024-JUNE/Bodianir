// Define the array
/*var numbers = [10, 20, 30, 40, 50];

// Initialize a variable to store the sum
var sum = 0;

// Use a for loop to iterate over the array and calculate the sum
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i]; // Add the current element to the sum
}
console.log("Niilber", sum);

// Calculate the average
var average = sum / numbers.length;

// Output the average
console.log("The average is:", average);

const array = [10, 20, 30, 40];
let answer = 0;
for (let i = 0; i < array.length; i++) {
  answer = answer + array[i];
}
let ave = answer / array.length;
console.log("the average is", ave);

const x = [15, 25, 35, 45, 55];
let y = 0;
for (let i = 0; i < x.length; i++) {
  //4 0< 4 gehdee 0 4 hurtel davtagna
  y = y + x[i];
}
let g = y / x.length;
console.log(g);

let s = 2;
for (let i = 1; i < Infinity; i++) {
  s ** i;
  break;
}
let complex = s ** i;
console.log(complex);

let max = [1, 3, 5, 22, 89, 46, 17, 31, 100];
let minNumber = max[0];
let maxNumber = max[0];
let cons = 0;
for (let i = 1; i < max.length; i++) {
  if (max[i] > maxNumber) {
    maxNumber = max[i];
  }
}
if (max[i] < minNumber) {
  minNumber = max[i];
}
console.log("Max number:", maxNumber);
console.log("Min number:", minNumber);

let arrays = [1, 2, 3, 4, 5];
for (let i = 0; i < arrays.length; i++) {
  console.log(arrays[i]);
}

let num = 5;
let ss = 0;

for (let pow = 0; pow < 1000; pow++) {
  // Set a reasonable limit to avoid infinite loop
  ss = num ** pow;
  if (ss > 1000) {
    console.log(`${num}-iin ${pow} zeregn 1000aas ih bn: ${ss}`);
    break; // Exit the loop if condition is met
  } else {
    console.log(`ss ${ss} 1000 aas baga bn`);
  }
}
  */

/*const arr = [1, 5, 3, 4, 10];
let sum = 0;
arr.map((element) => {
  sum = sum + element;
});
console.log(sum);

function doubleNumbers(array) {
  const result = array.map((element) => {
    return element * 2;
  });
  return result;
  console.log(doubleNumbers([2, 5, 100]));
}*/
function doubleNumbers(arr) {
  const result = arr.map((element) => {
    return element * 2;
  });
  return result;
}

const doubledNumbers = doubleNumbers([2, 5, 100]);
console.log(doubledNumbers);

2;

function stringItUp(arr) {
  const result = arr.map((element) => {
    return element.toString();
  });
  return result;
}
console.log(stringItUp([2, 5, 100]));

// 3;
// function capitalizeNames(arr) {
//   const result = arr.map((names) => {
//     return names.charAt(0).toUpperCase() + names.slice(1).toLowerCase();
//   });
//   return result;
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
function Name(array) {
  const result = array.map((capital) => {
    return capital.charAt(0).toUpperCase() + capital.slice(1).toLowerCase();
  });
  return result;
}

console.log(Name(["andy", "Bro,", "leETCOde"]));
