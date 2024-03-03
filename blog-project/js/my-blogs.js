let login = localStorage.getItem("login");
let blogList = document.querySelector("#blog-list");
let logoutBtn = document.querySelector("#logout");

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

function printData() {
  let blogs = localStorage.getItem("blogs");
  blogs = JSON.parse(blogs);
  blogs = blogs.filter((value) => {
    return value.user_id === login;
  });

  let list = blogs.map((value) => {
    return `
    <section class="blog-area-view">
    <section class="blog-area-view-text">
      <h2 class="title">${value.title}</h2>
      <p class="desc">${value.description}</p>
      <p class="author" ><button data-id="${value.id}" class="remove-blog">Delete</button>
      </p>
    </section>
    <img
      class="image-preview-view"
      src="${value.url}"
      alt=""
    />
  </section>
    `;
  });
  blogList.innerHTML = list.join("");
  removeMyBlog();
}
printData();

function removeMyBlog() {
  let removeButtonList = document.querySelectorAll(".remove-blog");
  removeButtonList.forEach((removeButton) => {
    removeButton.addEventListener("click", () => {
      Swal.fire({
        title: "Are you sure to delete this blog?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          let id = Number(removeButton.dataset.id);
          // collect list from localStorage
          let _blogs = JSON.parse(localStorage.getItem("blogs"));
          _blogs = _blogs.filter((value) => {
            return value.id !== id;
          });
          localStorage.setItem("blogs", JSON.stringify(_blogs));
          printData();
          Swal.fire({
            title: "Deleted!",
            text: "Your blog has been deleted.",
            icon: "success",
          });
        }
      });
    });
  });
}
