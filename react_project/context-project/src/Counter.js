import { useCounterContext } from "./context/counter.context";

const Counter = () => {
  let { incCounter, counter } = useCounterContext();
  return (
    <>
      <center>
        <h1>Count: {counter}</h1>
        <button onClick={incCounter}>Inc</button>
      </center>
    </>
  );
};

export default Counter;
