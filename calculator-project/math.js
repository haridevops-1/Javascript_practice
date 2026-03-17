// Addition
export function add(a, b) {
  return a + b;
}
// Multiplication

export function sub(a, b) {
  return a - b;
}
// Multiplication

export function Mul(a, b) {
  return a * b;
}

// Division
export function Div(a, b) {
  if (b === 0) {
    return "cannot divisible by 0";
  }
  return a / b;
}

export default function logResult(result) {
  console.log("Calculated Result:", result);
}
