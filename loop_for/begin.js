// Print Numbers from 1 to 10
// Use a loop to print numbers from 1 to 10.
for (let i = 1; i < 11; i++) {
  console.log(i);
}

// Print Even Numbers (1–20)
// Use a loop to print only even numbers between 1 and 20.

for (let i = 1; i < 21; i++) {
  if (i % 2 == 0) {
    console.log(i, "It is even");
  } else if (i % 2 != 0) {
    console.log(i, "It is odd");
  }
}

// Sum of First N Numbers
// Given a number n, find the sum of numbers from 1 to n using a loop.

let n = 10;
let sum = 0;
for (let i = 0; i <= n; i++) {
  sum = sum + i;
}
console.log("Total sum is", sum);

// Multiplication Table
// Print the multiplication table of a given number (example: 5 × 1 to 5 × 10).

let value = 5;
for (let i = 1; i <= 10; i++) {
  let result = i * value;
  console.log(result);
}

// Count Vowels in a String
// Given a string, count how many vowels (a, e, i, o, u) it contains using a loop and condition.

function vowels(letters) {
  let count = 0;
  let vowels = `aeiouAEIOU`;
  let len = letters.length;
  for (let i = 0; i < len; i++) {
    if (vowels.includes(letters[i])) {
      count += 1;
    }
  }
  console.log(count);
}

vowels(`hello`);
