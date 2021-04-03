import React, { useState } from "react";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>State: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Plus</button>
      <button onClick={() => setCounter(counter - 1)}>Minus</button>
      <button onClick={() => setCounter(counter - counter)}>Reset</button>
    </>
  );
};

export default CounterApp;
