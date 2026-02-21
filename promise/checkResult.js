// Task 1: Pass or Fail
// Create a Promise:

// If mark >= 50 → resolve("You Passed")

// Else → reject("You Failed")

// Add 2 seconds delay using setTimeout

// Handle it using .then() and .catch()

let mark = 45;


// Creating new promise() for check
function GettingResult() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mark > 35) {
        resolve("Student is Passed!");
      } else {
        reject("student is Failed!");
      }
    }, 1500);
  });
}


// CallBack funtion for handling the promises
function outputResult() {
  GettingResult()
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("Thanks for seeing Result");
    });
}
outputResult();
