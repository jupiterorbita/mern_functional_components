import React, { useState } from "react";

const Counter = (props) => {
  const [state, setState] = useState({
    clickCount: 0,
  });
  console.log("state.clickCount -> ", state.clickCount);

  const [count, setCount] = useState(0);
  const handleClick2 = () => {
    setCount(count + 1);
  };

  const handleClick = () => {
    console.log("clicked! state.clickCount is ", state.clickCount);
    setState({
      clickCount: state.clickCount + 1,
    });
  };

  return (
    <fieldset>
      <p>
        state.clickCount = {state.clickCount}
        <br />
        <button onClick={handleClick}>handleClick</button>
        <br />
        {/*  */}
        count: {count}
        <br />
        <button onClick={handleClick2}>handleClick</button>
      </p>
    </fieldset>
  );
};

export default Counter;
