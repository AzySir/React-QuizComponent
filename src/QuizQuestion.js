/* QuizQuestion.js */
import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component {
    render () {
        return (
        <main>
            <section>
                <p>{this.props.quiz_question.instruction_text}</p>
            </section>
            <section className="buttons">
                <ul>
                    {this.props.answer_options.map((answer_option,index) => { 
                        return <QuizQuestionButton button_text={answer_option} key={index} />
                    })}
                </ul>
            </section>
        </main>
        )
    }
}

export default QuizQuestion
