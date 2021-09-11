import * as S from './styles'
import Link from 'next/link'
import { getAllClientes } from 'service/clientes'
import { FiArrowLeft } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const SearchFriends = () => {
  const [busca, setBusca] = useState('')
  const [clientes, setClientes] = useState()
  const router = useRouter()

  const handleSearch = () => {
    busca && router.push(`/Search?query=${busca}`)
  }
  const handleChangePesquisa = ({ target }) => setBusca(target.value)

  useEffect(() => console.log(busca), [busca])
  useEffect(() => {
    getAllClientes().then(({ data }) => {
      console.log(data)
      var filteredData = []
      for (var i = 0; i < data.length; i++) {
        var user = data[i].nome.toLowerCase()
        if (user.includes(busca)) {
          filteredData.push(data[i])
        }
      }
      console.log(clientes)
      console.log(data.nome == 'maria')
      console.log(filteredData)
      setClientes(data)
    })
  }, [busca, clientes])
  return (
    <S.WrapperSearchFriends>
      <S.DivContainer>
        <S.DivBuscarAmigos>
          <S.DivVoltar className="top-bar-container">
            <Link href="/">
              <FiArrowLeft size={30} color="#fff" />
            </Link>
          </S.DivVoltar>
          <S.DivCampoInput>
            <div className="form-group">
              <form action="">
                <h1>Encontrar Amigos</h1>

                <div className="input-container">
                  <input
                    id="name"
                    className="input"
                    type="text"
                    pattern=".+"
                    required
                    value={busca}
                    onChange={handleChangePesquisa}
                  />
                  <label className="label" htmlFor="name">
                    Nome
                  </label>
                </div>
                <S.ButtonPesquisar onClick={handleSearch}>
                  Pesquisar
                </S.ButtonPesquisar>
              </form>
            </div>
          </S.DivCampoInput>
        </S.DivBuscarAmigos>
      </S.DivContainer>
    </S.WrapperSearchFriends>
  )
}
export default SearchFriends
