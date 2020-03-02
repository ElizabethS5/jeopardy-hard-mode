import React from "react";
import Categories from "../categories/Categories";
import Questions from "../questions/Questions";
import "./Display.css";

function Display(props) {
  return (
    <div>
      <h3 className="score">Score: ${props.score}</h3>
      <Categories
        categories={props.categories}
        getCategoryQuestions={props.getCategoryQuestions}
      />
      <div className="questionsContainer">
        <Questions
          questions={props.questions}
          selectQuestion={props.selectQuestion}
        />
        {props.data.category && (
          <div className="questionContainer">
            <h4 className="QuestionCategory">
              Category: {props.data.category.title}
            </h4>
            <h4 className="value">Value: ${props.data.value}</h4>
            <h2 className="question">{props.data.question}</h2>
            <form className="answerForm" onSubmit={props.handleSubmit}>
              Who/What is
              <br />
              <br />
              <input
                name="guess"
                type="text"
                value={props.guess}
                onChange={props.handleChange}
              />
              ?
              <br />
              <br />
              <button className="submitButton">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Display;
