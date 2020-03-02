import React, { Component } from "react";
//import our service
import JeopardyService from "../../jeopardyService";
import Display from "../display/Display";
import ThreeCategories from "../../ThreeCategories";
import CategoryQuestions from "../../CategoryQuestions";

class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.categoriesClient = new ThreeCategories();
    this.state = {
      categories: [],
      categoryQuestions: [],
      data: {},
      score: 0,
      guess: ""
    };
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      });
    });
  }

  getThreeCategories() {
    return this.categoriesClient.getQuestion().then(result => {
      this.setState({
        categories: result.data
      });
    });
  }

  getCategoryQuestions = catId => {
    let categoryQuestionClient = new CategoryQuestions(catId);
    return categoryQuestionClient.getQuestions().then(result => {
      this.setState({ categoryQuestions: result.data });
    });
  };

  selectQuestion = index => {
    this.setState((state, props) => {
      return { data: state.categoryQuestions[index] };
    });
    console.log("Answer", this.state.data.answer);
  };

  //when the component mounts, get a the first question
  componentDidMount() {
    // this.getNewQuestion();
    this.getThreeCategories();
  }

  handleChange = event => {
    this.setState({ guess: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.guess === this.state.data.answer) {
      this.setState((state, props) => ({
        score: state.score + state.data.value,
        guess: ""
      }));
    } else {
      this.setState((state, props) => ({
        score: state.score - state.data.value,
        guess: ""
      }));
    }
    // this.getNewQuestion();
    this.setState((state, props) => ({ guess: "", data: {} }));
  };

  //display the results on the screen
  render() {
    return (
      <div className="Jeopardy">
        <Display
          categories={this.state.categories}
          getCategoryQuestions={this.getCategoryQuestions}
          questions={this.state.categoryQuestions}
          selectQuestion={this.selectQuestion}
          data={this.state.data}
          score={this.state.score}
          guess={this.state.guess}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
export default Jeopardy;
