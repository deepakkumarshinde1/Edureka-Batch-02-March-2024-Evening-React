import { useRef, useState } from "react";
import axios from "axios";

function RegPopUp(props) {
  let { setShowPopUp } = props;
  //   let [_name, setName] = useState("");
  let newUser = {
    name: useRef(null),
    email: useRef(null),
    mobile: useRef(null),
    password: useRef(null),
    c_password: useRef(null),
  };
  const saveUserData = async () => {
    let _newUser = {
      name: newUser.name.current.value,
      email: newUser.email.current.value,
      mobile: newUser.mobile.current.value,
      password: newUser.password.current.value,
      c_password: newUser.c_password.current.value,
    };

    delete _newUser.c_password;
    // save data
    let url = "http://localhost:3004/users";
    // js Object to string
    let { data } = await axios.post(url, _newUser);
    if (data) {
      alert("Registration Done Successfully");
    }
  };
  //   console.log("Rendering");
  return (
    <>
      <section className="pop-registration">
        <section className="user-registration">
          <form action="#">
            <div>
              <label htmlFor="">Name</label>
              <input
                ref={newUser.name}
                type="text"
                id="fullName"
                // value={_name}
                placeholder="Enter FullName"
                // onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input
                ref={newUser.email}
                type="text"
                id="email"
                placeholder="Enter Email"
              />
            </div>
            <div>
              <label htmlFor="">Mobile</label>
              <input
                ref={newUser.mobile}
                type="text"
                id="mobile"
                placeholder="Enter Mobile"
              />
            </div>
            <div>
              <label htmlFor="">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                ref={newUser.password}
              />
            </div>
            <div>
              <label htmlFor="">Confirm Password</label>
              <input
                ref={newUser.c_password}
                type="text"
                id="cpassword"
                placeholder="Enter Confirm Password"
              />
            </div>
            <div>
              <button
                onClick={saveUserData}
                type="button"
                id="save"
                className="btn btn-success"
              >
                Save
              </button>
              <button
                onClick={() => setShowPopUp(false)}
                type="button"
                className="cancel btn btn-danger"
              >
                Cancel
              </button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
}

export default RegPopUp;
