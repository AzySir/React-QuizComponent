/* QuizEnd.js */
import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Link
  } from 'react-router-dom'

class QuizEnd extends Component { 
    handleResetClick() {
        this.props.resetClickHandler();
    }
    render() {
        //const isQuizEnd = true;
        return (
            <Router>
            <div>
                <p>Thanks for playing!</p>
                <Link to='/work/quiz/' onClick={this.handleResetClick.bind(this)}>Reset Quiz</Link>
            </div>
            </Router>
        )
    }
}

export default QuizEnd