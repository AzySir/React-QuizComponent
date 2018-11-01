/* Quiz JS */ 
import React, { Component } from 'react'
import '../css/create.css'
import CreateForm from './CreateForm'

//let quizData = require('./quiz_data.json');

class Create extends Component {
    /*constructor(props) {
        super(props); 
    } */ 
//Change file name here
    render() {
        return (
            <CreateForm />
        )
    };  
}

export default Create;
