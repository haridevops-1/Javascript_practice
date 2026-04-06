// Reduce is used for sum the total values. It is used for adding all the elements and add it in one variable
// First it take the first element and stored in total then one by one will store in el and Final it will add

const arr = [5, 1, 4, 3, 2];

function ArraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(ArraySum(arr));

// Here we can see the output 15, so we are using this example for reduce function

// In this acc is a sum and we declared a initial values as 0 and curr is current value. 
// Through the traversing each value stored in the curr and it will be append to acc that is sum in the normal function

const ReduceArr = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
console.log(ReduceArr);
