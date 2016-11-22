import { FETCH_PROJECTS, FETCH_PROJECTS_SUCCESS } from '../actions/actionTypes'

const initialState = []

export default function reducer(state = initialState, action = {}) {
  const { data } = action
  switch (action.type) {
    case FETCH_PROJECTS:
      return state
    case FETCH_PROJECTS_SUCCESS: 
      console.log('@', data, state) 
      state = data
      return state
    default:
      return state
  }
}
