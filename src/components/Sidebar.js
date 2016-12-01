import React, { Component } from 'react'
import { Menu, Icon } from 'antd'

const SubMenu = Menu.SubMenu

export default class Sidebar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      current: '1'
    }
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    })
  }

  getStyles() {
    return {
      menu: {
        borderRight: 'none',
        maxWidth: '240px'
      }
    };
  }

  render() {
    const styles = this.getStyles()

    const home = [{
      name: 'Blog',
      href: 'http://blog.thonatos.com'
    }, {
      name: 'Docs',
      href: 'http://docs.implements.io'
    }]

    const link = [{
      name: 'Zhihu',
      href: 'https://zhuanlan.zhihu.com/a-log-cabin'
    }, {
      name: 'Github',
      href: 'https://github.com/MT-Libraries/'
    }]

    const about = [{
      name: 'Weibo',
      href: 'http://weibo.com/thonatos'
    }]

    return (
      <div className="sidebar">
        <Menu onClick={this.handleClick}
          defaultOpenKeys={['home']}
          selectedKeys={[this.state.current]}
          mode="inline"
          style={styles.menu}
          >

          <SubMenu key="home" title={<span><Icon type="home" /><span>Home</span></span>}>
            {
              home.map((value, key) =>
                <Menu.Item key={key} >
                  <a href={value.href} className="link" target="_blank">{value.name}</a>
                </Menu.Item>
              )
            }
          </SubMenu>

          <SubMenu key="link" title={<span><Icon type="link" /><span>Link</span></span>}>
            {
              link.map((value, key) =>
                <Menu.Item key={key} >
                  <a href={value.href} className="link" target="_blank">{value.name}</a>
                </Menu.Item>
              )
            }
          </SubMenu>

          <SubMenu key="about" title={<span><Icon type="user" /><span>About</span></span>}>
            {
              about.map((value, key) =>
                <Menu.Item key={key} >
                  <a href={value.href} className="link" target="_blank">{value.name}</a>
                </Menu.Item>
              )
            }
          </SubMenu>
        </Menu>
      </div >
    )
  }
}
