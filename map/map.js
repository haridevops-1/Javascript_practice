// Map,we change change the values by using map

let array = [20, 10, 30];
let rupeesINR = array.map((x) => x * 83);
console.log(rupeesINR);

// Map is used for array
// This is List of Objects
const input = [
  { name: "Hariharan", age: 20 },
  { name: "Rajesh", age: 23 },
  { name: "chithra", age: 30 },
  { name: "vijayashanthi", age: 25 },
  { name: "ravi", age: 40 },
];
// console.log(input);

// We are storing mapped values to the variables
const ages = input.map((x) => x.name);
console.log(ages);
