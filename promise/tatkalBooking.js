function tatkalBooking() {
  return new Promise((resolve, reject) => {
    let ticketBooking = False;
    if (ticketBooking == true) {
      resolve();
    } else {
      reject();
    }
  });
}

function ticketResult() {
  tatkalBooking()
    .then(() => {
      console.log("Thanks buddy!, we have received");
    })
    .catch(() => {
      console.log("Sorry buddy, go to bus");
    });
}
ticketResult()