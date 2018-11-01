/* QuizQuestion.js */
import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = { incorrectAnswer: false }
    }
    handleClick(buttonText) {
        console.log("Button Text:" + buttonText)
        if (buttonText === this.props.quiz_question.answer) {
            this.setState({incorrectAnswer: false})
            this.props.showNextQuestionHandler();
        }
        else {
            this.setState({incorrectAnswer: true})
        }   
    }
    render () {
        return (
            <div>
            <section>
                <p>{this.props.quiz_question.instruction_text}</p>
            </section>
            <section className="buttons">
                <ul>
                    {this.props.quiz_question.answer_options.map((answer_option,index) => 
                        <QuizQuestionButton button_text={answer_option} key={index} clickHandler={this.handleClick.bind(this)} />
                    )}
                </ul>
            </section>
                    { this.state.incorrectAnswer ? <p className="error">Sorry, that's not right </p> : null }
        </div>
        )
    }
}

export default QuizQuestion
