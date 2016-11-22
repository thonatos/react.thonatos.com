import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as projectsActions from '../redux/actions';
// assets

class Projects extends Component {

  render() {
    const { projects, dispatch } = this.props
    const actions = bindActionCreators(projectsActions, dispatch)    
    actions.fetchProjects('http://account.arashivision.com/dtalk/init')
    return (
      <div className="project">
        <ul className="list">
          {
            projects.map((obj, index) => {
              return (
                <li key={index}>
                  <a href={obj.href} target="_blank">{obj.name}</a>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(state => ({
  projects: state.projects
}))(Projects)