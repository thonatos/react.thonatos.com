import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import projects from './projects'
import about from './about'

const rootReducer = combineReducers({
  about,
  projects,
  routing
})

export default rootReducer