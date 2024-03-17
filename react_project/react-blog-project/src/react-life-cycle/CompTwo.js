// function CompTwo() {
//   return <>Comp Two</>;
// }

import { useEffect, useState } from "react";

const CompTwo = () => {
  let [counter, setCount] = useState(1);

  useEffect(() => {
    // console.log("counter value is changed");
  }, [counter]); // update stage

  useEffect(() => {
    // console.log("fun comp 2 is mounted");
    return () => {
      //   console.log("fun comp 2 is unmounted");
    };
  }, []);

  return (
    <>
      <button onClick={() => setCount(counter + 1)}>INC</button>
      <h4>Comp Two {counter}</h4>
    </>
  );
};

export default CompTwo;
