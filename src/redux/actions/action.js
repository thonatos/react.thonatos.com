import axios from 'axios'
import { FETCH_PROJECTS, FETCH_PROJECTS_SUCCESS, FETCH_PROJECTS_FAILURE } from './actionTypes'

function requestData() {
  return {
    type: FETCH_PROJECTS
  }
}

function receiveData(json) {
  return {
    type: FETCH_PROJECTS_SUCCESS,
    data: json
  }
}

function receiveError(json) {
  return {
    type: FETCH_PROJECTS_FAILURE,
    data: json
  }
}

export function fetchProjects(url) {
  return (dispatch) => {
    dispatch(requestData())
    return axios({
      url: url,
      timeout: 20000,
      method: 'get',
      responseType: 'json'
    }).then(function (response) {
      dispatch(receiveData(response.data))
    }).catch(function (response) {
      dispatch(receiveError(response.data))
    })

  }
}