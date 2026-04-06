// Filter method is used for filter the values in the array based on our code logic

const arr = [2, 3, 5, 6, 7, 8];

// Filtering only the Even values
const EvenArr = arr.filter((x) => x % 2 !== 0);
console.log(EvenArr);

// Filtering only the Odd Numbers

function OddNumbers(num) {
  return num % 2 === 0;
}
const OddArr = arr.filter(OddNumbers);
console.log(OddArr);

// Filtering only the greater than 3
const GreaterNumbers = arr.filter((num) => num > 3);
console.log(GreaterNumbers);
