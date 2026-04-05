// Checking in word containing vowels or not

let vowels = "aeiouAEIOU";
let word = "academy";

function CheckVowels() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word)) {
          resolve("Vowels found");
        } else {
          reject("Vowels not found");
        }
      }
    }, 2000);
  });
}
    
async function ResultVowels() {
  try {
    let result = await CheckVowels();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
ResultVowels();
