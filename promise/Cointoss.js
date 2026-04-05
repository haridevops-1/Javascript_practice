function Cointoss() {
  return new Promise((resolve, reject) => {
    let rand = Math.Floor(Math.random() * 2);
    // 0 means Head & 1 means Tails
    if (rand == 0) {
      resolve();
    } else {
      reject();
    }
  });
}

Cointoss()
  .then(() => console.log("Congrats You won! "))
  .catch(() => console.log("Sorry You have Lost! "));
