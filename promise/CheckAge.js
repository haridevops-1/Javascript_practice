// Challenge Task (Important 🚀)

// let age = 18;

function CheckAge(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("You can vote");
    } else {
      reject("Not eligible");
    }
  });
}

function FinalCheck(age) {
  CheckAge(age)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("Thanks for checking");
    });
}

FinalCheck(20);
// FinalCheck(16);
