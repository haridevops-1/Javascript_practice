import { add, sub, Mul, Div } from "./math.js";

console.log(add(10, 10));
console.log(sub(20, 5));
console.log(Mul(10, 5));
console.log(Div(40, 3));

var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var operator = document.getElementById("operator");
var button = document.getElementById("calculateBtn");
var result = document.getElementById("result");

button.addEventListener("click", () => {
  const a = num1.value;
  const b = num2.value;
  const op = operator.value;
  if (a === "" || b === "") {
    result.innerText = "Please Enter both Numbers";
  }
  const numA = parseInt(a);
  const numB = parseInt(b);

  let output;

  // Switch Case
  switch (op) {
    case "+":
      output = add(numA, numB);
      break;
    case "-":
      output = sub(numA, numB);
      break;
    case "*":
      output = Mul(numA, numB);
      break;
    case "/":
      output = Div(numA, numB);
      break;
    default:
        output = "Select an operator"
  }
  result.innerText = "Result: " + output

  logResult(output)
});
