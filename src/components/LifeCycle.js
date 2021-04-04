import React, { useState, useEffect } from "react";

const LifeCycle = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log("con cada render");
  });

  useEffect(() => {
    console.log("con render inicial");
  }, []);

  useEffect(() => {
    console.log("con render inicial y de counter");
  }, [counter]);

  return (
    <>
      <h1>LifeCycle</h1>

      <h3>Clicks counter: {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={() => setCounter(counter - counter)}>Reset</button>

      <h3>Clicks counter2: {counter2}</h3>
      <button onClick={() => setCounter2(counter2 + 1)}>Increment</button>
      <button onClick={() => setCounter2(counter2 - 1)}>Decrement</button>
      <button onClick={() => setCounter2(counter2 - counter2)}>Reset</button>
    </>
  );
};

export default LifeCycle;
