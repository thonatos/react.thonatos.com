export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS'

const API_GITHUB_REPOS = 'https://api.github.com/users/thonatos/repos'

import axios from 'axios'

/**
 * dealData
 * @param {*} json 
 */
function dealData(json) {
  // SORT
  json.sort(function (a, b) {
    let aT = new Date(a.created_at)
    let bT = new Date(b.created_at)
    return aT < bT ? 1 : -1
  })

  return {
    type: FETCH_PROJECTS_SUCCESS,
    data: json
  }
}

export function fetchProjects() {
  return (dispatch) => {
    return axios({
      url: API_GITHUB_REPOS,
      timeout: 20000,
      method: 'get',
      responseType: 'json'
    }).then(function (response) {
      dispatch(dealData(response.data))
    }).catch(function (response) {
      console.log(response)
    })
  }
}