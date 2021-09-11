import * as S from './styles'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

const ContainerDetalheAmigo = () => {
  return (
    <S.WrapperSearchFriends>
      <S.DivContainer>
        <S.DivBuscarAmigos>
          <S.DivVoltar className="top-bar-container">
            <Link href="/Principal/BuscarAmigos">
              <FiArrowLeft size={30} color="#fff" />
            </Link>
          </S.DivVoltar>
          <S.DivBlocoImg>
            <S.ImgAmigo src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
            <S.Name>Rafael</S.Name>
          </S.DivBlocoImg>
          <S.DivBlocoDetalhe>
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
          </S.DivBlocoDetalhe>
        </S.DivBuscarAmigos>
      </S.DivContainer>
    </S.WrapperSearchFriends>
  )
}
export default ContainerDetalheAmigo
