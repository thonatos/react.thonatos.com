import React, { Component } from 'react';

import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu

export default class Sidebar extends Component {

  constructor() {
    super()
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

    return (
      <div className="sidebar">
        <Menu onClick={this.handleClick}
          defaultOpenKeys={['home']}
          selectedKeys={[this.state.current]}
          mode="inline"
          style={styles.menu}
          >
          <SubMenu key="home" title={<span><Icon type="home" /><span>Home</span></span>}>
            <Menu.Item key="1">
              <a href="http://blog.thonatos.com" target="_blank">Blog</a>
            </Menu.Item>
            <Menu.Item key="2">
              <a href="http://docs.implements.io" target="_blank">Docs</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="link" title={<span><Icon type="link" /><span>Link</span></span>}>
            <Menu.Item key="3">
              <a href="https://zhuanlan.zhihu.com/a-log-cabin" target="_blank">Zhihu</a>
            </Menu.Item>
            <Menu.Item key="4">
              <a href="https://github.com/MT-Libraries/" target="_blank">Github</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="about" title={<span><Icon type="user" /><span>About</span></span>}>
            <Menu.Item key="5">Me</Menu.Item>
          </SubMenu>
        </Menu>
      </div >
    )
  }
}
