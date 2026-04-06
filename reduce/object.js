    const users = [
    { FirstName: "Niroshini", LastName: "Amala", age: 26 },
    { FirstName: "Sathya", LastName: "Pramod", age: 30 },
    { FirstName: "Bharath", LastName: "Waj", age: 34 },
    { FirstName: "Hanisha", LastName: "Fathima", age: 32 },
    ];


// console.log(users)
const output = users.map((x)=> x.FirstName + " "+ x.LastName)
console.log(output)