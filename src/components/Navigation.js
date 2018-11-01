import React, { Component } from 'react'
import Main from './Main.js'
import Work from './Work.js'
import About from './About.js'
import Contact from './Contact.js'

import '../css/navigation.css'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

class Navigation extends Component { 
    render () {
        return (
            <Router>
                <div className="col-12 nav">
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/work/list"> Portfolio </Link></li>
                <li><Link to="/about"> About </Link></li>
                <li><Link to="/help"> Help </Link></li>
                <li><Link to="/contact"> Contact </Link></li>

                <Route exact path="/" component={Main}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/work/list" component={Work}></Route>
                <Route exact path="/contact" component={Contact}></Route>
                </div>
            </Router>
        );
    }
}

export default Navigation