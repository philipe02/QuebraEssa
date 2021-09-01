import axios from '.'

export const getAllServicos = () => {
  return axios.get('/servico')
}
