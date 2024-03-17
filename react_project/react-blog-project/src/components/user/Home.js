import { Link } from "react-router-dom";
import Blogs from "./Blogs";
import Header from "./Header";

function Home() {
  return (
    <>
      <main>
        <Header />
        <section id="blog-list">
          <Blogs />
          <Blogs />
          <Blogs />
          <Blogs />
          <Blogs />
        </section>
      </main>
    </>
  );
}

export default Home;
