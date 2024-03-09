import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(1); // [value, updateValue]

  // function expression with arrow function
  const incCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={incCounter}>CLICK</button>
    </>
  );
}

export default Counter;
