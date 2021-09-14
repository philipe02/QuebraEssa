import axios from 'axios'
const baseUrl = 'https://quebraessa-api.herokuapp.com/api/v1/'
//const baseUrl = 'http://localhost:8080/api/v1/'

export default axios.create({
  baseURL: baseUrl,
  timeout: 30000,
  headers: {
    'Content-type': 'application/json'
  }
})

export function prepararUrl(path, params) {
  let url = path
  if (params) {
    url += '?'
    Object.keys(params).forEach((chave, index) => {
      if (params[chave]) {
        let paramUrlAux = index === 0 ? '' : '&'
        url += `${paramUrlAux}${chave}=${params[chave]}`
      }
    })
  }
  return url
}
