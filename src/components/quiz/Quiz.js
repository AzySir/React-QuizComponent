/* Quiz JS */ 
import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'
import {
    Link
  } from 'react-router-dom'

let quizData = require('./quiz_data.json');

class Quiz extends Component {
    constructor(props) {
        super(props); 
        this.state = { quiz_position: 1, displayList: false }
        console.log("Quiz Started...");
    }  
    showNextQuestion() {
        this.setState({quiz_position: this.state.quiz_position + 1});
    }

    handleResetClick() {        
        this.setState({ quiz_position: 1, displayList: false });
    }
    changeDisplay() {
        this.props.handleListDisplay(true);
    }
    addQuestion() {
        this.props.addQuestionToQuiz();
    }
//Change file name here
    render() {
        console.log(this.props.testProp);
        const isQuizEnd = ((this.state.quiz_position - 1) === quizData.quiz_questions.length)
        return (
            <div>
              <Link to="/work"><span className="backtoportfolioBtn" onClick={this.changeDisplay.bind(this)}>Back to Projects</span></Link>
              <Link to="/work/add"><span className="backtoportfolioBtn">Add Question To Quiz</span></Link>

              { isQuizEnd ? <QuizEnd resetClickHandler={this.handleResetClick.bind(this)} /> : <QuizQuestion showNextQuestionHandler={this.showNextQuestion.bind(this)} quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />}
            </div>
        )
    };  
}

export default Quiz;
