import { Link } from "react-router-dom";
import "../../css/login.css";
import { useEffect, useRef, useState } from "react";
import RegPopUp from "./RegPopUp";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { makeUserLogin, saveLoginDetails } from "../../redux/blog.slice";

function Login() {
  let dispatch = useDispatch();
  let { user } = useSelector((state) => state.blog);
  let [showPopUp, setShowPopUp] = useState(null);
  let loginUser = {
    username: useRef(),
    password: useRef(),
  };

  let makeLogin = async () => {
    dispatch(makeUserLogin(loginUser));
  };

  useEffect(() => {
    if (user !== null) {
      window.location.replace("/");
    }
  }, [user]);
  return (
    <>
      <main className="login-page">
        <section className="login-section">
          <p className="title">User Login</p>
          <form action="">
            <div>
              <label htmlFor="lUserName">
                <i className="fa fa-user-secret" aria-hidden="true"></i>
              </label>
              <input
                type="email"
                id="lUserName"
                name=""
                placeholder="Enter UserName"
                ref={loginUser.username}
              />
            </div>
            <div>
              <label htmlFor="lPassword">
                <i className="fa fa-key" aria-hidden="true"></i>
              </label>
              <input
                type="password"
                id="lPassword"
                name=""
                placeholder="Enter Password"
                ref={loginUser.password}
              />
            </div>
            <div className="sign-in">
              <button type="button" onClick={makeLogin}>
                <i className="fa fa-sign-in" aria-hidden="true"></i> &nbsp;Login
              </button>
              <Link to="/">Goto Home</Link>
            </div>
            <div>
              <p className="align-right">
                Don't have account? &nbsp;
                <a
                  href="#"
                  className="create-account"
                  onClick={() => setShowPopUp(true)}
                >
                  Create a new
                </a>
              </p>
            </div>
          </form>
        </section>
      </main>

      {showPopUp && <RegPopUp setShowPopUp={setShowPopUp} />}
    </>
  );
}

export default Login;
