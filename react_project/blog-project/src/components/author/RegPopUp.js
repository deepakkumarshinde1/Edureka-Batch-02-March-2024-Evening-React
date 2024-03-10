import { useRef, useState } from "react";

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

    // save data
    let url = "http://localhost:3004/users";
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(_newUser),
    };
    // js Object to string
    let response = await fetch(url, options); // function call
    let data = await response.json();
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
