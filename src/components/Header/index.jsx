import * as S from './styles'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { getAllServicos } from 'service/servicos'
import { useRouter } from 'next/router'
import { UserContext, userInitialState, userTeste } from 'context/UserContext'

const Header = () => {
  const [servicosMenu, setServicosMenu] = useState(false)
  const [userMenu, setUserMenu] = useState(false)
  const [pesquisa, setPesquisa] = useState('')
  const [servicos, setServicos] = useState()
  const [usuario, setUsuario] = useContext(UserContext)
  const router = useRouter()

  const abrirServicosMenu = () => setServicosMenu(true)
  const fecharServicosMenu = () => setServicosMenu(false)
  const toggleUserMenu = () => setUserMenu(!userMenu)

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

  useEffect(() => console.log(servicos, servicosMenu), [servicos, servicosMenu])
  useEffect(() => {
    getAllServicos().then(({ data }) => {
      setServicos(data)
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
        <S.MenuItem id="servicoLink" onMouseEnter={abrirServicosMenu}>
          Serviços
          {servicos && servicosMenu && (
            <S.DropDown id="dropdownServico" onMouseLeave={fecharServicosMenu}>
              {servicos &&
                servicos.map((servico) => (
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
          )}
        </S.MenuItem>
      </S.Menu>
      <S.SearchContainer>
        <S.Search
          id="pesquisaInput"
          name="pesquisa"
          placeholder="Pesquisar serviços"
          value={pesquisa}
          onChange={handleChangePesquisa}
        />
        <S.SearchIcon src="/assets/searchicon.svg" onClick={handleSearch} />
      </S.SearchContainer>
      {usuario.id && (
        <Link href="/Principal/BuscarAmigos">
          <S.AmigosContainer>
            <S.AmigosImg src="/assets/imgAddAmigos.png" />
            <S.AmigosLabel>Buscar amigos</S.AmigosLabel>
          </S.AmigosContainer>
        </Link>
      )}
      {usuario.id ? (
        <S.UserHeader onClick={toggleUserMenu}>
          <S.UserLabel>{`${usuario['first-name']} ${usuario['last-name']}`}</S.UserLabel>
          <S.UserPhoto src="https://picsum.photos/200"></S.UserPhoto>
          {userMenu && (
            <S.UserMenu>
              <Link href="/">
                <S.UserOption onClick={logarUsuario}>Sair</S.UserOption>
              </Link>
            </S.UserMenu>
          )}
        </S.UserHeader>
      ) : (
        <S.Login>
          <Link href="/Principal">
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
