
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
