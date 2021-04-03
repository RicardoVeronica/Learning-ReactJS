import React, { useState } from "react";

const ConditionalApp = () => {
  const [condition, setCondition] = useState(true);

  const buttonStyle = { display: "block", "margin-bottom": "1rem" };

  return (
    <>
      {condition === true ? <h1>Hello world</h1> : <h1>Bye bye world</h1>}

      <button onClick={() => setCondition(!condition)} style={buttonStyle}>
        Change message
      </button>

      <code>State: {condition.toString()}</code>
    </>
  );
};

export default ConditionalApp;
