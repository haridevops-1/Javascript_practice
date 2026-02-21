// let StudentDetails = {
//   name: "Hariharan",
//   age: 20,
//   marks: [50, 50, 67, 70, 80],
//   displayDetails() {
    // console.log("Name:", this.name, "Age:", this.age, "Marks:", this.marks);
//     console.log({
//       Name: this.name,
//       Age: this.age,
//       Marks: this.marks,
//     });
//   },
// };
// function average_marks() {
//   const sum = StudentDetails.marks.reduce((acc, mark) => acc + mark, 0);
//   const avg = sum / StudentDetails.marks.length;
//   console.log("Average marks:", avg);
// }

// StudentDetails.displayDetails();
// average_marks();

// Using Class. It is only Important
class Student {
  marks = [];
  constructor(name, age, marks) {
    this.name = name;
    this.age = age;
    this.marks = marks;
  }
  displayDetails() {
    console.log(`Name:${this.name},Age:${this.age},Marks:${this.marks}`);
  }
  studentAverage() {
    let average = this.marks.reduce((acc, el) => acc + el, 0);
    let sum = average / this.marks.length;

    console.log(sum.toFixed(2));
  }
}

let student1 = new Student("Hariharan", 21, [90, 90, 98, 97, 80]);
let student2 = new Student("Rajes", 20, [90, 80, 70, 90, 99]);

student1.studentAverage();
student2.displayDetails();
student1.displayDetails();
