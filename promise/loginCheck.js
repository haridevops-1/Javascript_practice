// Task 4: Simple Login

let Username = "admin";
let Password = "1234";

function LoginCheck() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Username === "admin" && Password === "1234") {
        resolve("Login Successful");
      } else {
        reject("Invalid credentials");
      }
    }, 3000);
  });
}

// Callback Function

function FinalResult() {
  LoginCheck()
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("Bye");
    });
}

FinalResult();
