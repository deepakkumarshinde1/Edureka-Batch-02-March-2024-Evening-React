let studentName;
const studentMobile = 12344;

// function

// 5 type of function
// common function

function add() {} // definition
add(); // run a function

// function expression
let sub = function () {}; //definition
sub(); // run a function

// callback
div(10, 20, function () {
  // callback function
});

// arrow
let sub1 = () => {}; //definition
sub(); // run a function

div(10, 20, () => {
  // callback function
});

// IIFE --> Immediately Invoke Function Expression
(function () {})(); // function run as soon as page executes

(() => {})(); // function run as soon as page executes

// function with a function keyword has its own "this" context
// function with a => don't have its own "this" context
