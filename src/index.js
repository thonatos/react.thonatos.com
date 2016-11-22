import React from 'react'
import ReactDOM from 'react-dom'

import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Provider } from 'react-redux'

// style
import "./less/v2/base.less"

// redux
import { store } from './redux';
const history = syncHistoryWithStore(browserHistory, store)

// component
import { About, Projects } from './components'

// bootstrap
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={About} />
      <Route path='/projects' component={Projects} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
