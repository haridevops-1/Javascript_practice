//  Local scope
//  We should use thin within the block

function greetUser() {
  let greeting = "Hi, ";
  //   console.log(greeting);
  if (true) {
    let username = "Hariharan Welcome to Javascript";
    console.log(greeting + username);
  }
  for (let i = 0; i <= 11; i++) {
    console.log(greeting + " "+ i);
  }
}

greetUser();
