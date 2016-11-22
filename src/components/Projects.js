import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as projectsActions from '../redux/actions';

// assets
import { Row, Col } from 'antd'

class Projects extends Component {

  render() {
    const { projects, dispatch } = this.props
    const actions = bindActionCreators(projectsActions, dispatch)
    actions.fetchProjects('https://api.github.com/users/thonatos/repos')
    return (
      <div className="project">

        <Row>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
        </Row>
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