import React, { Component } from 'react'
import { Row, Col, Timeline, Card, Icon } from 'antd'

class Projects extends Component {

  componentDidMount() {
    const { fetchProjects } = this.props
    fetchProjects('https://api.github.com/users/thonatos/repos')
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
    )
  }
}

export default Projects