// Level 2 – Even or Odd
// let number = 10;

let number = 9;
function CheckingValue() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number % 2 == 0) {
        resolve("Even");
      } else {
        reject("odd");
      }
    }, 2000);
  });
}

function ResultValue() {
  CheckingValue()
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("bye");
    });
}
ResultValue();
