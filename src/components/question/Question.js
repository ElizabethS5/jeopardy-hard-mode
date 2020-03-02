import React from "react";
import "./Question.css";

function Question(props) {
  return (
    <button className="Question" onClick={props.selectQuestion}>
      <h2>${props.value}</h2>
    </button>
  );
}

export default Question;
