import axios from 'axios'

export const FETCH_PROJECTS = 'FETCH_PROJECTS'
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS'
export const FETCH_PROJECTS_FAILURE = 'FETCH_PROJECTS_FAILURE'

const list = [
  {
    name: 'github',
    href: 'https://github.com/MT-Libraries/'
  },
  {
    name: 'weibo',
    href: 'http://weibo.com/thonatos'
  },
  {
    name: 'hexo',
    href: 'http://blog.thonatos.com'
  },
  {
    name: 'zhihu',
    href: 'https://zhuanlan.zhihu.com/a-log-cabin'
  }
]

function requestData() {
  return {
    type: FETCH_PROJECTS
  }
}

function receiveData(json) {
  return {
    type: FETCH_PROJECTS_SUCCESS,
    data: list
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
    })
      .catch(function (response) {
        dispatch(receiveError(response.data))
      })

  }
}