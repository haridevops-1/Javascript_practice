// Even or Odd
// Write a program that checks whether a given number is even or odd

function checking(num) {
  if (num % 2 == 0) {
    console.log("It is even");
  } else if (num % 2 != 0) {
    console.log("It's not even");
  }
}
checking(20);
checking(13);

// Positive, Negative, or Zero
// Given a number, check whether it is positive, negative, or zero.

function value_check(num) {
  if (num > 0) {
    console.log("It is positive");
  } else if (num < 0) {
    console.log("It is negative");
  } else if (num == 0) {
    console.log("It is zero");
  }
}
value_check(102);
value_check(-10);
value_check(0);
// Largest of Two Numbers
// Take two numbers and print which one is larger.

function larger_numbers(num_1, num_2) {
  if (num_1 > num_2) {
    console.log("num_1 is greater than num_2");
  } else if (num_1 < num_2) {
    console.log("num_2 is greater than num_1");
  }
}

larger_numbers(10, 20);
larger_numbers(20, 10);

// Pass or Fail
// If a student’s mark is 35 or above, print "Pass", otherwise print "Fail".

function students_mark(marks) {
  if (marks > 35) {
    console.log("pass");
  } else {
    console.log("fail");
  }
}

students_mark(80);
students_mark(34);
