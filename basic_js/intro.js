// shallow and deep copy
let a = 1234;
let b = a;
a = 999;
console.log(a);
console.log(b);

// shallow copy
// let array = [10, 20, 30, 40];
// let array2 = array;
// array[0] = 100;

// console.log(array);
// console.log(array2);

// deep copy (spread operator)
let array = [10, 20, 30, 40];
let array2 = [...array];
array[0] = 100;

console.log(array);
console.log(array2);

let student = { name: "Deepak" };
let student_1 = { ...student };
student.name = "suraj";

console.log(student);
console.log(student_1);

// destructuring
//array and object
let numbers = [10, 20];
// let number_1 = numbers[0];
// let number_2 = numbers[1];
let [number_1, number_2] = numbers;

console.log(number_1);
console.log(number_2);

let product = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
};

// let { title, price: p } = product;
// let title = product.title;
// let price = product.price;
// let p = product.price;
// let { title, abc } = product;

// console.log(title);
// console.log(abc);
let brand = "edureka";
let courseName = "react";
// string template
let text = `Welcome to ${brand}, we have started a ${courseName} course`;

console.log(text);

let n1 = "1";
let n2 = 1;

// let result = Number(n1) + n2;
let result = +n1 + n2;
console.log(result);
