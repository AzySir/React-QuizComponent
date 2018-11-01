import React, { Component } from 'react';
import '../css/work.css'
import Quiz from './quiz/Quiz'
import Crud from './Crud.js'
import Create from './Create.js'

import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

class Work extends Component {
    constructor (props) {
        super();
        this.state = {displayList: true};
    } 
    handleListDisplay(val) {
        this.setState({displayList: val})
    }
    
    render() {
        return (
            <Router>
                <div className="main">
                <h1>Project List</h1>
                    <table className={this.state.displayList ? null : "hidden"}>
                        <thead>
                            <tr>
                                <th>Application Name</th>
                                <th>Date Created</th> 
                                <th>Date Completed</th>
                                <th>Author</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><Link to="/work/quiz" onClick={() => this.handleListDisplay(false)}>Quiz Application</Link></td>
                            <td>October 12th 2018</td>
                            <td>October 14th 2018</td>
                            <td>Adam Sir</td>
                        </tr>
                        <tr>
                            <td><Link to="/work/crud" onClick={() => this.handleListDisplay(false)}>CRUD Application</Link></td>
                            <td>October 19th 2018</td>
                            <td>IN PROGRESS</td>
                            <td>Adam Sir</td>
                        </tr>
                        </tbody>
                    </table>
                    <Route exact path="/work/quiz" component={ () => <Quiz handleListDisplay={this.handleListDisplay.bind(this)} />}></Route>
                    <Route exact path="/work/crud" component={ () => <Crud />}></Route>
                    <Route exact path="/work/add" component={ () => <Create />}></Route>
                </div>
            </Router>
        );
    }
}

export default Work
