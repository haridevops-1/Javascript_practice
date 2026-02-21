// Using Function,Writing age by voting

const ages = [13, 4, 2, 31, 23, 18, 30, 20, 10, 40];
var result = ages.filter(CheckAdult);

// Function
function CheckAdult(ages) {
  return ages >= 18;
}
console.log(result);
