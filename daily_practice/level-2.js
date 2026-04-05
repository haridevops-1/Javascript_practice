// Sum of Even Numbers

// Write a program to find the sum of all even numbers from 1 to N.
// Use a loop and conditional check.
// Input will be a single number

function even_sum(N) {
  let sum = 0;
  for (i = 1; i <= N; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  console.log("Total sum of N is:", sum);
}
even_sum(10);
even_sum(20);

// Reverse a String Write a program to reverse a given string using a loop.
// Do not use built-in reverse methods.
// Print the reversed string.

function reverse_string(text) {
  let len = text.length;
  let reversed_string = "";

  for (let i = len - 1; i >= 0; i--) {
    reversed_string += text[i];
  }

  console.log(reversed_string);
}

reverse_string("hello");
reverse_string("Freshworks");

// Find Largest Number in an Array

// Write a program to find the largest number in an array.
// Use a loop and comparison operator.
// Assume the array has at least one element.

function largest(arr) {
  let max_number = arr[0];
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] > max_number) {
      max_number = arr[i];
    }
  }
  console.log("Largest value is:", max_number);
}
largest([10, 30, 40, 70, 50]);

// Write a program to find the smallest number in an array.
// Use a loop and comparison operator.
// Assume the array has at least one element.

function smallest(array) {
  let smallest = array[0];
  let len = array.length;
  for (let i = 0; i < len; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
    }
  }
  console.log("Smallest value is: ", smallest);
}
smallest([20, 5, 40, 10, 50]);

// Count Vowels in a String

// Write a program to count vowels (a, e, i, o, u) in a string.
// Use a loop and conditional statements.
// Ignore case sensitivity.

function count_vowels(word) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  let len = word.length;
  for (let i = 0; i < len; i++) {
    if (vowels.includes(word[i])) {
      count += 1;
    }
  }
  console.log(count);
}
count_vowels("Javascript");
