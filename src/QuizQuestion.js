/* QuizQuestion.js */
import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component {
    handleClick() {
        const buttonText;


    }
    render () {
        return (
        <main>
            <section>
                <p>{this.props.quiz_question.instruction_text}</p>
            </section>
            <section className="buttons">
                <ul>
                    {this.props.answer_options.map((answer_option,index) => { 
                        return <QuizQuestionButton button_text={answer_option} key={index} clickHandler={this.handleClick.bind(this)} />
                    })}
                </ul>
            </section>
        </main>
        )
    }
}

export default QuizQuestion
