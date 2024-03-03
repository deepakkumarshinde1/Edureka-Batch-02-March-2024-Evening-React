// Array
// Array is a collection of key  and value pair
let array = [10, 20, 30, 40];

// array.forEach()
array.forEach(function (value, index) {
  console.log(value, index);
});

// Object is a collection of key and value pair but here key are user defined
let studentData = { name: "Deepakkumar", marks: 25, age: 30, percentage: 50.5 };
// JSON --> Javascript Object Notation
console.log(studentData);

// What if we have a list of student
let studentList = [{ name: "Deepak" }, { name: "Suraj" }, { name: "Neha" }]; // JSON array
console.log(studentList);

// shallow and deep copy
