import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { App, About, Projects } from './containers'

export default (
  <Route path="/">
    <IndexRoute component={About} />
    <Route path="projects" component={App}>
      <IndexRoute component={Projects} />
    </Route>
  </Route>
)