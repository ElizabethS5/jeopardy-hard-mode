import React from "react";
import Category from "../category/Category";
import "./Categories.css";

function Categories(props) {
  return (
    <div className="Categories">
      {props.categories.map((category, i) => (
        <Category
          key={i}
          id={category.id}
          title={category.title}
          getQuestions={() => props.getCategoryQuestions(category.id)}
        />
      ))}
    </div>
  );
}
export default Categories;
