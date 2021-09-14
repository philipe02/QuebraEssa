import axios, { prepararUrl } from '.'

export const getAllFornecedores = (filtros) => {
  let urlTratada = prepararUrl('/fornecedores', filtros)
  return axios.get(urlTratada)
}
