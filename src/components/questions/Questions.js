import React from "react";
import Question from "../question/Question";
import "./Questions.css";

function Questions(props) {
  return (
    <div className="Questions">
      {props.questions.map((question, i) => (
        <Question
          key={i}
          value={question.value}
          selectQuestion={() => props.selectQuestion(i)}
        />
      ))}
    </div>
  );
}

export default Questions;
