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

1;
function stringItUp(arr) {
  const result = arr.map((string) => string.toString());
  return result;
}

console.log(stringItUp([2, 5, 100]));

2;
function capitalizeNames(arr) {
  const capital = arr.map((cap) => cap.charAt(0).toUpperCase() + cap.slice());
  return capital;
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

3;
function namesOnly(arr) {
  const cc = arr.map((string) => string.name);
  return cc;
}

console.log(
  namesOnly([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);

4;

let c = 16;

function makeStrings(arr) {
  const results = arr.map((limit) => {
    if (limit.age > c) {
      return `${limit.name} can go to Matrix`;
    } else {
      return `${limit.name} is under age!!`;
    }
  });
  results.forEach((result) => console.log(result));

  return results;
}

console.log(
  makeStrings([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);
5;
function readyToPutInTheDOM(arr) {
  // Use map to transform each object into an HTML string
  return arr.map((item) => `<h1>${item.name}</h1><h2>${item.age}</h2>`);
}

console.log(
  readyToPutInTheDOM([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);
