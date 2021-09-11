import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FiArrowRight } from 'react-icons/fi'

const Indicacoes = () => {
  let rows = []
  for (let i = 0; i < 5; i++) {
    rows.push(<FontAwesomeIcon icon={faStar} size="lg" />)
  }
  return (
    <S.Wrapper>
      <S.TitleSectionIndicacao>Indicações</S.TitleSectionIndicacao>
      <S.DivGridIndicacao>
        <S.DivIndicacao>
          <S.divImage>
            <S.ImgIndicacoes
              className=" pt-lg-8 d-flex align-items-center"
              style={{
                backgroundImage:
                  'url(' +
                  'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' +
                  ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <S.DivTextIndicacao>
              <h1>Paula</h1>
              <h2>Cabeleleira</h2>
            </S.DivTextIndicacao>
          </S.divImage>
          <S.DivButton>
            <S.Estrelas>{rows}</S.Estrelas>
            <S.Button>
              <FiArrowRight size={20} color="#fff" />
            </S.Button>
          </S.DivButton>
        </S.DivIndicacao>
        <S.DivIndicacao>
          <S.divImage>
            <S.ImgIndicacoes
              className=" pt-lg-8 d-flex align-items-center"
              style={{
                backgroundImage:
                  'url(' +
                  'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' +
                  ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <S.DivTextIndicacao>
              <h1>Roberto</h1>
              <h2>Fotografo</h2>
            </S.DivTextIndicacao>
          </S.divImage>
          <S.DivButton>
            <S.Estrelas>{rows}</S.Estrelas>
            <S.Button>
              <FiArrowRight size={20} color="#fff" />
            </S.Button>
          </S.DivButton>
        </S.DivIndicacao>
        <S.DivIndicacao>
          <S.divImage>
            <S.ImgIndicacoes
              className=" pt-lg-8 d-flex align-items-center"
              style={{
                backgroundImage:
                  'url(' +
                  'https://images.pexels.com/photos/3770107/pexels-photo-3770107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' +
                  ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <S.DivTextIndicacao>
              <h1>Rodrigo</h1>
              <h2>Garçom</h2>
            </S.DivTextIndicacao>
          </S.divImage>
          <S.DivButton>
            <S.Estrelas>{rows}</S.Estrelas>
            <S.Button>
              <FiArrowRight size={20} color="#fff" />
            </S.Button>
          </S.DivButton>
        </S.DivIndicacao>
      </S.DivGridIndicacao>
    </S.Wrapper>
  )
}
export default Indicacoes
