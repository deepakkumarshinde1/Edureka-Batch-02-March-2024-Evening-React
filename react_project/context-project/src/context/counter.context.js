import { createContext, useContext, useState } from "react";

// create context
let CounterContext = createContext({});

// create a provider component
export const CounterContextProvider = (props) => {
  let { children } = props;
  let [counter, setCounter] = useState(0);

  let incCounter = () => {
    console.log("click");
    setCounter(counter + 1);
  };

  let values = {
    incCounter,
    counter,
  };
  return (
    <>
      <CounterContext.Provider value={values}>
        {children}
      </CounterContext.Provider>
    </>
  );
};
// create a custom hook

export let useCounterContext = () => {
  return useContext(CounterContext);
};
