function HomeReached() {
  return new Promise((resolve, reject) => {
    let randomMessage = false;
    if (randomMessage) {
      resolve();
    } else {
      reject();
    }
  });
}
HomeReached()
.then(()=>console.log("Yes I have Successfully Reached Home"))
.catch(()=> console.log("No I met an small Accident"))