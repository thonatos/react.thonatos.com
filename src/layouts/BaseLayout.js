import React, { Component } from 'react'
import { connect } from 'react-redux'

// components
import Sidebar from '../components/Sidebar'
import './BaseLayout.less'

class BaseLayout extends Component {

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

export default connect()(BaseLayout)