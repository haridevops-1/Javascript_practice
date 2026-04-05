// Find Smallest Number in an Array

// Write a program to find the smallest number in an array.
// Use a loop and comparison operators.
// Assume the array contains at least one number.

// function smallestArray(arr) {
//   let len = arr.length;
//   let smallest = arr[0];
//   for (let i = 0; i < len; i++) {
//     if (arr[i] < smallest) {
//       smallest = arr[i];
//     }
//   }
//   console.log("smallest value is:", smallest);
// }
// smallestArray([20, 10, 5, 40, 20, 40, 50, 60]);
// smallestArray([45, 12, 78, 4, 23]);

// Count Positive Numbers in an Array

// Write a program to count how many positive numbers are present in an array.
// Use a loop and conditionals.
// Ignore zero and negative values.

function isCountPositiveNumbers(num) {
  var len = num.length;
  var count = 0;
  for (let i = 0; i < len; i++) {
    if (num[i] > 0) {
      count += 1;
    }
  }
  console.log("Total count of positive Numbers: ", count);
}

isCountPositiveNumbers([-1, 5, 0, 3, -2, 8]);


