import React, { Component } from 'react'

// assets
import avatar from '../assets/mtt.png'
import './About.less'

class About extends Component {

  render() {
    const { about } = this.props
    return (
      <div className="container">
      <div className="about">
        <img src={avatar} className="avatar" alt="avatar" />
        <article className="detail">
          <h1>{about.name}</h1>
          <p>{about.detail.email}<br />
            {about.detail.career}<br />
            {about.detail.degree}
          </p>
          <p>{about.detail.description}</p>
        </article>
        <ul className="social">
          {
            about.links.map((obj, index) => {
              return (
                <li key={index}>
                  <a href={obj.href} target="_blank">
                    <i className="iconfont" dangerouslySetInnerHTML={{ __html: obj.icon }}></i>
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
      </div>
    )
  }
}

export default About