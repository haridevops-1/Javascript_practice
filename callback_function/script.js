// 
function greetings(name) {
  console.log("Hello", name);
}

function GoodBye() {
  console.log("Gooodbye");
}


greetings("Hari")
GoodBye()

// 
function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  callback("Hari");
}

processUser(greet);
