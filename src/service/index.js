import axios from 'axios'
//const baseUrl = 'http://quebraessa-api.herokuapp.com/api/v1/'
const baseUrl = 'http://localhost:8080/api/v1/'

export default axios.create({
  baseURL: baseUrl,
  timeout: 30000,
  headers: {
    'Content-type': 'application/json'
  }
})
