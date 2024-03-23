import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/blog.slice";
import { memo } from "react";

function Header() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { user } = useSelector((state) => state.blog);
  return (
    <>
      <header className="main-header">
        <section className="brand">
          <span>DevNode.io</span>
        </section>
        <ul className="menu">
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
        <section>
          {user && (
            <span>
              Welcome, <b>{user.name}</b>
            </span>
          )}
          <button
            className="write-btn"
            style={{ marginRight: "4px", marginLeft: "4px", cursor: "pointer" }}
            onClick={() => navigate("/write-blog")}
          >
            Write&nbsp;
            <i className="fa fa-edit"></i>
          </button>
          {user ? (
            <button className="write-btn">
              <Link to="#" onClick={() => dispatch(logout())}>
                Logout&nbsp;
                <i className="fa fa-sign-out"></i>
              </Link>
            </button>
          ) : (
            <button className="write-btn">
              <Link to="/login">
                Login
                <i className="fa fa-user"></i>
              </Link>
            </button>
          )}
        </section>
      </header>
    </>
  );
}

export default memo(Header);

// HOF (Higher Order Function)
// Header --> pure component (rendered when  it's props change or it's internal state change)
// memo == > HOC (Higher Order Component)
