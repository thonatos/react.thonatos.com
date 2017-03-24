import React, { Component } from 'react'
import { Row, Col, Timeline, Card, Icon } from 'antd'

class Projects extends Component {

  componentDidMount() {
    const { fetchProjects } = this.props
    fetchProjects()
  }

  render() {
    const { projects } = this.props

    return (
      <Row>
        <Col span={24} style={{
          padding: '2em'
        }}>
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