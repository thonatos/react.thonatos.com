import React from 'react'
import ReactDOM from 'react-dom'

import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

// style
import "./less/v2/base.less"

// redux
import { store } from './redux';

// component
import { Home, About, Projects } from './components'

// bootstrap
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Home} />
      <Route path='/projects' component={Projects} />
      <Route path='/about' component={About} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
