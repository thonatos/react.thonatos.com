import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import "./less/v2/base.less"

import About from './components/About'
import about from './reducers'

const store = createStore(about)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <About
    info={store.getState().info}
    onLOG={(ev, txt) => store.dispatch({ type: 'LOG', ev: ev, txt: txt })}
    />,
  rootEl
)

render()
store.subscribe(render)
