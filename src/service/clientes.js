import axios from '.'

export const getAllClientes = () => {
  return axios.get('/cliente')
}
