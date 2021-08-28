import * as S from './styles'

const Main = ({ title, description, nome }) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description + ' by: ' + nome}</S.Description>
  </S.Wrapper>
)

export default Main
