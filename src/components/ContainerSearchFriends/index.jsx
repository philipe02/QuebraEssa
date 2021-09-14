import * as S from './styles'
import Link from 'next/link'
import { getAllClientes } from 'service/clientes'
import { FiArrowLeft, FiPlus } from 'react-icons/fi'
import { useEffect, useState } from 'react'

const SearchFriends = () => {
  const [busca, setBusca] = useState('')
  const [clientes, setClientes] = useState()

  const handleChangePesquisa = ({ target }) => setBusca(target.value)

  useEffect(() => console.log(busca), [busca])
  useEffect(() => {
    getAllClientes().then(({ data }) => {
      if (busca.length === 0) return setClientes(data.content)
      var valor = busca.toLowerCase()
      var filtrado = data.content.filter((obj) =>
        obj.nome.toLowerCase().includes(valor)
      )
      setClientes(filtrado)
    })
  }, [busca])
  return (
    <S.WrapperSearchFriends>
      <S.DivBuscarAmigos>
        <S.DivVoltar className="top-bar-container">
          <Link href="/">
            <FiArrowLeft size={30} color="#fff" />
          </Link>
        </S.DivVoltar>
      </S.DivBuscarAmigos>
      <S.DivBlocoDetalhe>
        <S.DivCampoInput>
          <div className="form-group">
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
            {clientes &&
              clientes.map((cliente) => (
                // eslint-disable-next-line react/jsx-key
                <Link href={'/BuscarAmigos/DetalheAmigo/' + cliente.cpf}>
                  <S.divCliente>
                    <S.ImgCliente src="https://picsum.photos/200" />
                    <S.NameCliente scope="row">{cliente.nome}</S.NameCliente>
                    <S.DivPlus>
                      <FiPlus size={32} color="#fff" />
                    </S.DivPlus>
                  </S.divCliente>
                </Link>
              ))}
          </div>
        </S.DivCampoInput>
      </S.DivBlocoDetalhe>
    </S.WrapperSearchFriends>
  )
}
export default SearchFriends
