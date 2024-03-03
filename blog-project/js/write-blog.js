let login = localStorage.getItem("login");
let userDetails = null;
if (login === null) {
  window.location.replace("/login.html");
} else {
  userDetails = localStorage.getItem("users");
  userDetails = JSON.parse(userDetails);
  userDetails = userDetails[login];
  document.querySelector("#welcome-text").innerHTML = `Welcome, <b>${
    userDetails.fullName.split(" ")[0]
  }</b>`;
}

console.log(userDetails);
let logoutBtn = document.querySelector("#logout");
let title = document.querySelector("#title");
let description = document.querySelector("#description");
let url = document.querySelector("#url");
let saveBlogBtn = document.querySelector("#save-blog");
let previewImage = document.querySelector(".image-preview");

url.addEventListener("blur", () => {
  previewImage.src = url.value;
});

saveBlogBtn.addEventListener("click", () => {
  let newBlog = {
    id: Date.now(),
    title: title.value,
    description: description.value,
    url: url.value,
    user_id: login,
    author: userDetails.fullName,
  };

  if (!validate(title, "Please enter title")) {
    return false;
  }

  if (!validate(description, "Please enter description")) {
    return false;
  }

  if (!validate(url, "Please enter url")) {
    return false;
  }

  let blogs = localStorage.getItem("blogs"); // null;
  blogs = blogs === null ? [] : JSON.parse(blogs);

  blogs.unshift(newBlog);
  localStorage.setItem("blogs", JSON.stringify(blogs));

  title.value = description.value = url.value = "";
  previewImage.src =
    "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png";

  Swal.fire({
    icon: "success",
    title: "Your blog has been saved",
    showConfirmButton: false,
    timer: 2000,
  });
});

logoutBtn.addEventListener("click", () => {
  Swal.fire({
    title: "Are you sure to logout?",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, logout!",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("login");
      window.location.replace("/login.html");
    }
  });
});
