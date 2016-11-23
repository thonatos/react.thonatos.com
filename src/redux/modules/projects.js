import { FETCH_PROJECTS_SUCCESS } from '../actions/actionTypes'

const initialState = []

export default function reducer(state = initialState, action = {}) {
  const { data } = action  
  switch (action.type) {
    case FETCH_PROJECTS_SUCCESS:       
      return [...data]
    default:
      return state
  }
}
