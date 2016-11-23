import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// ui && assets
import { BaseLayout } from '../layouts'
import { Row, Col, Timeline, Card, Icon } from 'antd'

// logical
import * as projectsActions from '../redux/actions/action'

class Projects extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    const actions = bindActionCreators(projectsActions, dispatch)
    actions.fetchProjects('https://api.github.com/users/thonatos/repos')
  }

  getStyles() {
    return {
      projects: {
        padding: '2em'
      }
    }
  }

  render() {
    const { projects } = this.props
    projects.sort(function (a, b) {
      let aT = new Date(a.created_at)
      let bT = new Date(b.created_at)
      return aT < bT ? 1 : -1
    })
    const styles = this.getStyles()

    return (
      <BaseLayout>
        <Row>
          <Col span={24} style={styles.projects}>
            <Timeline pending={<a href="#">See more</a>}>
              {
                projects.map((obj, index) => {
                  return (
                    <Timeline.Item key={index}>
                      <Card title={obj.name} bordered={false}>
                        <p>{obj.description}</p>
                        <div style={{ textAlign: 'right' }}>
                          <a href={obj.html_url}><Icon type="github" /></a>
                        </div>
                      </Card>
                    </Timeline.Item>
                  )
                })
              }
            </Timeline>
          </Col>
        </Row>
      </BaseLayout>
    )
  }
}

export default connect(state => ({
  projects: state.projects
}))(Projects)