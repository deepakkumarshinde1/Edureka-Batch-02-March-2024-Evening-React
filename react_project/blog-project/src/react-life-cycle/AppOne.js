import { useState } from "react";
import CompOne from "./CompOne";
import CompTwo from "./CompTwo";

const AppOne = () => {
  let [toggle, setToggle] = useState(false);
  return (
    <>
      <center>
        <button onClick={() => setToggle(!toggle)}>Toggle Comp</button>
        {toggle ? <CompOne /> : <CompTwo />}
      </center>
    </>
  );
};

export default AppOne;
