import { Link } from "react-router-dom";
import Blogs from "./Blogs";

function Home() {
  return (
    <>
      <main>
        <header className="main-header">
          <section className="brand">
            <span>DevNode.io</span>
          </section>
          <ul className="menu">
            <li>
              <a href="#">Blog</a>
            </li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
          <section>
            <button className="write-btn">
              <a href="/write-blog.html">
                Write
                <i className="fa fa-edit"></i>
              </a>
            </button>
            <button className="write-btn">
              <Link to="/login">
                Login
                <i className="fa fa-user"></i>
              </Link>
            </button>
          </section>
        </header>
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
