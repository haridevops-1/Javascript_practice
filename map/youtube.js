// Map is basically used for iterate every values 
// from first to last to change the value or make some changes in that array


const arr = [5, 1, 3, 6, 4, 2];

// Double the values
const DoubleArr = arr.map((num) => num * 2);
console.log(DoubleArr);

// Using the Call Back function method also we can write
function triple(num) {
  return num * 3;
}
const DoubleArr2 = arr.map(triple);
console.log(DoubleArr2);

// Binary
const BinaryArr = arr.map((x) => x.toString(2));
console.log(BinaryArr);
