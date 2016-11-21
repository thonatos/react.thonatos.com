import React, { Component } from 'react'
import avatar from '../assets/mtt.png'
import './About.less'

class About extends Component {

  render() {
    const info = this.props.info
    return (
      <div className="about">
        <img src={avatar} className="avatar" alt="avatar" />
        <article className="detail">
          <h1>{info.name}</h1>
          <p>{info.detail.email}<br />
            {info.detail.career}<br />
            {info.detail.degree}
          </p>
          <p>{info.detail.description}</p>
        </article>
        <ul className="social">
          {
            info.links.map((obj, index) => {
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
    )
  }
}

export default About