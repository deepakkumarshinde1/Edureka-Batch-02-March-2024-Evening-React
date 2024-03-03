let blogs = localStorage.getItem("blogs");
let blogList = document.querySelector("#blog-list");
blogs = JSON.parse(blogs);

let list = blogs.map((value) => {
  return `
    <section class="blog-area-view">
    <section class="blog-area-view-text">
      <h2 class="title">${value.title}</h2>
      <p class="desc">${value.description}</p>
      <p class="author">- ${value.author}</p>
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
console.log(blogs);
