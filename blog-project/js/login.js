let createAccountBtn = document.querySelector(".create-account");
let popRegistration = document.querySelector(".pop-registration");
let cancelBtn = document.querySelector(".cancel");
let saveBtn = document.querySelector("#save");

let fullName = document.querySelector("#fullName");
let email = document.querySelector("#email");
let mobile = document.querySelector("#mobile");
let password = document.querySelector("#password");
let cpassword = document.querySelector("#cpassword");

let lUserName = document.querySelector("#lUserName");
let lPassword = document.querySelector("#lPassword");
let signIn = document.querySelector("#signIn");

// is userLogin

let login = localStorage.getItem("login");
if (login !== null) {
  window.location.replace("/write-blog.html");
}

createAccountBtn.addEventListener("click", () => {
  popRegistration.classList.remove("d-none");
});

cancelBtn.addEventListener("click", () => {
  popRegistration.classList.add("d-none");
});

saveBtn.addEventListener("click", () => {
  let newUser = {
    fullName: fullName.value,
    email: email.value,
    mobile: mobile.value,
    password: password.value,
  };

  if (!validate(fullName, "Please enter full name")) {
    return false;
  }

  if (!validate(email, "Please enter email")) {
    return false;
  }

  if (!validate(mobile, "Please enter mobile number")) {
    return false;
  }

  if (!validate(password, "Please enter password")) {
    return false;
  }

  if (!validate(cpassword, "Please enter confirm password")) {
    return false;
  }

  if (password.value !== cpassword.value) {
    Swal.fire({
      icon: "warning",
      title: "Password doesn't match.",
      text: "",
      confirmButtonText: "OK",
    });
    return false;
  }

  // local storage --> save
  let userList = localStorage.getItem("users"); // null;

  userList = userList === null ? [] : JSON.parse(userList);

  let isUserExist = userList.find((value) => {
    return value.email === newUser.email;
  });

  if (isUserExist === undefined) {
    userList.push(newUser);
    localStorage.setItem("users", JSON.stringify(userList));
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Registration successful, you can login now.",
      confirmButtonText: "OK",
    }).then((result) => {
      popRegistration.classList.add("d-none");
    });
  } else {
    Swal.fire({
      icon: "warning",
      title: "User Exists",
      text: "Given email already registered, try different",
      confirmButtonText: "OK",
    });
  }
});

signIn.addEventListener("click", () => {
  let username = lUserName.value;
  let password = lPassword.value;
  if (!validate(lUserName, "Please enter user name")) {
    return false;
  }

  if (!validate(lPassword, "Please enter password")) {
    return false;
  }

  let userList = localStorage.getItem("users"); // null;

  userList = userList === null ? [] : JSON.parse(userList);

  let isUserExist = userList.findIndex((value) => {
    return value.email === username && value.password === password;
  });

  if (isUserExist === -1) {
    Swal.fire({
      icon: "error",
      title: "Wrong details passed",
      text: "User not found, please try again!",
    });
  } else {
    localStorage.setItem("login", isUserExist);
    window.location.replace("/write-blog.html");
  }
});
