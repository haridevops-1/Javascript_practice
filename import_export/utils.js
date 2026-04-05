export function conversion_string(word) {
  let result = "";
  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      result = result + word[i].toUpperCase();
    } else {
      result = result + word[i].toLowerCase();
    }
  }
  return result
}

console.log(conversion_string("harihAran"));

console.log(conversion_string("KaMaLeSh"));
