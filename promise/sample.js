let admission = true;

function AcademyApplication() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (admission == true) {
        resolve("Admission for FSSA is now Open");
      } else {
        reject("Admission for FSSA is closed");
      }
    }, 2000);
  });
}

function AcademyInPerson() {
  AcademyApplication()
    .then((message) => {
      console.log(message)
    })
    .catch((error) => {
      console.log(error)
    })
}

AcademyInPerson();
