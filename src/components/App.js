import React, { Component } from 'react'
import logo from './assets/logo.svg'
import './App.less'

class App extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo} className="logo" alt="logo" />        
      </div>
    )
  }
}

export default App
