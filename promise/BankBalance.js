// Level 3 – Bank Balance
// Task 3: ATM Withdrawal

let balance = 5000;
let withdrawAmount = 6500;

function BankBalance() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (balance >= withdrawAmount) {
        resolve(balance - withdrawAmount+ " "+ "Transaction Successful");
      } else {
        reject("Insufficient Balance");
      }
    });
  });
}

// Callback Function
function FinalAmount() {
  BankBalance()
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("Thanks for visiting");
    });
}
FinalAmount();
