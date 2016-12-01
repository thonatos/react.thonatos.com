import React, { Component, PropTypes } from 'react'
import Sidebar from '../components/Sidebar'
import './App.less'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }

  render() {
    return (
      <div className="wrap">
        <Sidebar />
        <div className="main">
          {this.props.children}
        </div>
      </div>
    )
  }
  
}