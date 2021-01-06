// FUNCTIONAL COMPONENT
import React, { useState } from "react";

const FuncPersonCard = (props) => {
  const { firstName: fname, lastName: lname, age, hairColor } = props;
  const [state, setState] = useState({
    age: age,
  });
  console.log("state.age =>", state.age);
  console.log("age is after deconstruct ->", age);

  const birthDay = (age) => {
    console.log("clicked bday is ->", age, props.age, state.age);
    setState({
      age: state.age + 1,
    });
  };
  return (
    <div>
      <h2>
        {lname}, {props.firstName}
      </h2>
      <p>Age props.age: {props.age}</p>
      <p>Age state.age: {state.age}</p>
      <p>Hair Color: {props.hairColor}</p>
      <button onClick={() => birthDay(age)}>Happy Birthday! 🎂</button>
    </div>
  );
};

export default FuncPersonCard;
