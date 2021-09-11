import * as S from './styles'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

const SearchFriends = () => {
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
                  />
                  <label className="label" htmlFor="name">
                    Nome
                  </label>
                </div>
                <S.ButtonPesquisar>Pesquisar</S.ButtonPesquisar>
              </form>
            </div>
          </S.DivCampoInput>
        </S.DivBuscarAmigos>
      </S.DivContainer>
    </S.WrapperSearchFriends>
  )
}
export default SearchFriends
