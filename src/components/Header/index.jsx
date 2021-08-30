import * as S from './styles'
import Link from 'next/link'

const Header = () => (
  <S.Wrapper>
    <S.Logo src="/assets/logoTipo.png" alt="Logotipo da Quebra Essa" />
    <S.Menu>
      <li>
        <Link href="/">
          <S.MenuItem>Home</S.MenuItem>
        </Link>
      </li>
      <li>
        <S.MenuItem>Serviços</S.MenuItem>
      </li>
    </S.Menu>
    <S.SearchContainer>
      <S.Search placeholder="Pesquisar serviços" />
      <i className="fas fa-search"></i>
    </S.SearchContainer>
    <S.Login>
      <S.Signin>Entrar</S.Signin>
      <S.Register>Registre-se</S.Register>
    </S.Login>
  </S.Wrapper>
)

export default Header
