import * as S from './styles'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { getAllServicos } from 'service/servicos'
import { useRouter } from 'next/router'
import { UserContext, userInitialState, userTeste } from 'context/UserContext'

const Header = () => {
  const [pesquisa, setPesquisa] = useState('')
  const [servicos, setServicos] = useState([])
  const [usuario, setUsuario] = useContext(UserContext)
  const router = useRouter()

  const handleSearch = () => {
    pesquisa && router.push(`/Pesquisar?search=${pesquisa}`)
  }
  const handleChangePesquisa = ({ target }) => setPesquisa(target.value)
  const logarUsuario = () => {
    if (usuario.id) {
      setUsuario(userInitialState)
      return
    }
    setUsuario(userTeste)
  }

  useEffect(() => {
    getAllServicos().then(({ data }) => {
      setServicos(data.content)
    })
  }, [])
  return (
    <S.Wrapper>
      <S.Logo
        id="logoHeader"
        src="/assets/logoTipo.png"
        alt="Logotipo da Quebra Essa"
      />
      <S.Menu>
        <Link href="/" passHref>
          <S.MenuItem id="homeLink">Home</S.MenuItem>
        </Link>
        <S.MenuDropdown id="servicoLink" className="nav-item dropdown">
          <S.MenuItem
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            Serviços
          </S.MenuItem>
          <S.DropDown id="dropdownServico" className="dropdown-menu">
            {servicos.map((servico) => (
              <Link
                key={servico.titulo}
                href={`/Pesquisar?servico=${servico.titulo}`}
                passHref
                className="submenuItem"
              >
                <S.SubMenuItem>{servico.titulo}</S.SubMenuItem>
              </Link>
            ))}
          </S.DropDown>
        </S.MenuDropdown>
      </S.Menu>
      <S.SearchContainer>
        <S.Search
          id="pesquisaInput"
          name="pesquisa"
          placeholder="Pesquisar serviços"
          value={pesquisa}
          onChange={handleChangePesquisa}
          onKeyPress={(e) => console.log(e)}
        />
        <S.SearchIcon src="/assets/searchicon.svg" onClick={handleSearch} />
      </S.SearchContainer>
      {usuario.id && (
        <Link href="/BuscarAmigos">
          <S.AmigosContainer>
            <S.AmigosImg src="/assets/imgAddAmigos.png" />
            <S.AmigosLabel>Buscar amigos</S.AmigosLabel>
          </S.AmigosContainer>
        </Link>
      )}
      {usuario.id ? (
        <S.UserHeader className="dropdown ">
          <S.UserBtn
            className="btn btn-secondary"
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <S.UserLabel>{`${usuario['first-name']} ${usuario['last-name']}`}</S.UserLabel>
            <S.UserPhoto src="https://picsum.photos/200"></S.UserPhoto>
          </S.UserBtn>
          <S.UserMenu className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <S.UserOption onClick={logarUsuario}>Sair</S.UserOption>
          </S.UserMenu>
        </S.UserHeader>
      ) : (
        <S.Login>
          <Link href="#">
            <S.Signin id="entrarBtn" onClick={logarUsuario}>
              Entrar
            </S.Signin>
          </Link>
          <Link href="/Register">
            <S.Register id="registrarBtn">Registre-se</S.Register>
          </Link>
        </S.Login>
      )}
    </S.Wrapper>
  )
}

export default Header
