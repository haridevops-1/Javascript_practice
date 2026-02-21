// Reduce is used for sum the total values. It is used for adding all the elements and add it in one variable
// First it take the first element and stored in total then one by one will store in el and Final it will add 

const arr = [10, 20, 30, 40, 50];
var result = arr.reduce((total, el) => total + el,50);
console.log(result);


