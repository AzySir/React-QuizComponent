import React, { Component } from 'react'
import '../css/create.css'
var quizData = require('./quiz/quiz_data.json')
var fs = require('fs');

class CreateForm extends Component {
    constructor() {
        super();
        this.state = {
            question: "", 
            answer1: "", 
            answer2: "", 
            answer3: "", 
            answer4: "",
            error: {
                valid: false,
                reason: ''
            }
        };
        // this.setQuestion = this.setQuestion.bind(this);
    }

    checkQuestionAndAnswer = () => {
        //console.log("Submit");
        //console.log(quizData);
        //console.log(quizData.quiz_questions[0].id  + "|" + typeof quizData);

        var quizQuestionIndex = quizData.quiz_questions.length;
        console.log(quizQuestionIndex);
        
        
        var newQuestion = {
            "id": quizQuestionIndex + 1,
            "instruction_text": this.state.question,
            "answer_options": [this.state.answer1, this.state.answer2, this.state.answer3, this.state.answer4],
            "answer": this.state.answer1
        }
        quizData.quiz_questions[quizQuestionIndex] = Object.assign(newQuestion, quizData); //How to Append an Object
        
        console.log(quizData);
        
    }   
        
/*
        {
            "quiz_questions": [
              {
                "id": 1,
                "instruction_text": "How many continents are there on Planet Earth?",
                "answer_options": ["5", "6", "7", "8"],
                "answer": "7"
              },
              {
                "id": 2,
                "instruction_text": "What's your favorite number?",
                "answer_options": ["1", "2", "3", "4"],
                "answer": "4"
              },
              {
                "id": 3,
                "instruction_text": "Who won the AFL 2000 Premiership?",
                "answer_options": ["Essendon", "Carlton", "Melbourne", "Nth Melbourne"],
                "answer": "Essendon"
              },
              {
                "id": 4,
                "instruction_text": "Where is the most populated city in the world?",
                "answer_options": ["Istanbul", "Beijing", "Delhi", "Shanghai"],
                "answer": "Shanghai"
              }
            ]
          }
    }
    */

    onChange = (e, valid) => {
            this.setState({[e.target.name]: e.target.value});
            //this.setState({error: {valid: true}});
            //console.log("Valid: " + valid);
            //console.log(this.state);

    }
    
    setQuestion = (e) => {
        this.setState({question: e.target.value});
        console.log(this.state.question);
    }

    setAnswer = (e, ans) => {
        switch(ans) {
            case "Answer1":
            this.setState({answer1: e.target.value});
            console.log(this.state.answer1);
            break;
            case "Answer2":
            break;
            case "Answer3":
            break;
            case "Answer4":
            break;
            default:
            console.log("default here!!");
            break;
        }
    }


    validateQ = (e) => {
        //If there is an error create the error message here
            /*this.setState({
                error: {
                    [e.target.name]: "An Error has occured"
                }
            })*/
        
        //Else return true;
        return true;
    }

    validateA() {
        if (this.state.question !== "") {
            console.log("Question :     " + this.state.question);
        }
    }
    
    render() {
        return (
            <div className="main">
                <form>
                    <label htmlFor="Question">Question:</label>
                    <input type="text" name="question" id="Question" onChange={(event) => this.onChange(event, this.validateQ(event))} /><br />
                    
                    <label htmlFor="Answer1">Answer 1:</label>
                    <input type="text" name="answer1" id="Answer1" onChange={(event) => this.onChange(event, this.validateQ(event))} /><br />

                    <label htmlFor="Answer2">Answer 2:</label>
                    <input type="text" name="answer2" id="Answer2"  onChange={(event) => this.onChange(event, this.validateQ(event))} /><br />

                    <label htmlFor="Answer3">Answer 3:</label>
                    <input type="text" name="answer3" id="Answer3"  onChange={(event) => this.onChange(event, this.validateQ(event))} /><br />

                    <label htmlFor="Answer4">Answer 4:</label>
                    <input type="text" name="answer4" id="Answer4"  onChange={(event) => this.onChange(event, this.validateQ(event))} /><br />
                </form>
                <button type="button"  className="createBtn" id="addQuestionBtn" onClick={this.checkQuestionAndAnswer}>Add Question</button><button type="button" className="createBtn" id="clearQuestionBtn">Clear</button>
            </div> 
        )
    }
}
export default CreateForm;