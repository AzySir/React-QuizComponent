import React, { Component } from 'react'
import Navigation from './Navigation.js'
import '../css/app.css'

class App extends Component {
  render() {
    return (
    <div className="container">
      <div className="navigation">
        <Navigation />
      </div>
    </div>
    )
  }
}

export default App