import React from "react";
import "./Category.css";

function Category(props) {
  return (
    <div className="Category">
      <button className="Category" onClick={props.getQuestions}>
        <h1>{props.title}</h1>
      </button>
    </div>
  );
}

export default Category;
