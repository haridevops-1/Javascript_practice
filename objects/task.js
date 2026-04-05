// Create an object called person with the properties:

let Person = {
  Name: "Hariharan",
  Age: 21,
  Gender: "Male",
  address: {
    city: "Chennai",
    Landmark: "Saloon",
  },
};
console.log(Person);
console.log(Person.address.city);

// From the person object, print only: name, chennai only
console.log(Person.Name, Person.address.city);

// Create an object car with properties: brand, model, year
// Print the model using dot notation.

let Car = {
  brand: "Ford",
  model: "2010",
  year: "2025",
};
console.log(Car)

// Print the year of the car object using bracket notation.
console.log({year})