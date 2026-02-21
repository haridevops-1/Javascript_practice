arr2D = [
  ["a", "b", "c"],
  ["c", "d", "e"],
  ["e", "f", "g"],
];

// Flat is used for change 2D List to single list
let change = arr2D.flat();
console.log(change);

// Now we are going to do flat and reduce to see the output as Alphabets counts

var count = arr2D.flat().reduce((accumulator, currVal) => {
  if (accumulator[currVal]) accumulator[currVal]++;
  else accumulator[currVal] = 1;
  return accumulator;
}, {});

console.log(count);
