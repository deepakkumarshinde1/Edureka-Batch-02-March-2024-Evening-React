let save = document.querySelector("#save");
let input = document.querySelector("#input");

save.addEventListener("click", () => {
  let value = input.value;
  let newStudent = {
    name: value,
  };
  //   console.log(value);
  // students
  let students = localStorage.getItem("students");
  students = students === null ? [] : JSON.parse(students);

  // add data in array
  students.push(newStudent);

  // save to local storage
  localStorage.setItem("students", JSON.stringify(students));
});
