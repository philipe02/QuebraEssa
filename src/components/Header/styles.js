import styled from 'styled-components'

export const Wrapper = styled.nav`
  background-color: #fff;
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
`

export const Logo = styled.img`
  width: 20rem;
  object-fit: contain;
`

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 400;
`

export const MenuItem = styled.a`
  margin: 3rem;
  font-size: 2rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
`
export const SearchContainer = styled.div`
  display: flex;
  align-self: center;
  background-color: #eee;
  padding: 1rem;
  height: fit-content;
  border-radius: 2rem;
`
export const Search = styled.input`
  font-family: 'Roboto', sans-serif;
  border: none;
  background-color: inherit;
  font-size: 2rem;
  margin-left: 1rem;
  :focus {
    outline: none;
  }
`
export const Signin = styled.button`
  margin: 1rem;
  padding: 1rem 3rem;
  border: none;
  background-color: #fff;
  font-size: 1.5rem;
  font-family: 'Roboto', sans-serif;
`

export const Register = styled.button`
  margin: 1rem;
  padding: 1rem 3rem;
  background-color: #decef4;
  border: none;
  border-radius: 2rem;
  font-weight: bold;
  font-size: 1.5rem;
  font-family: 'Roboto', sans-serif;
`

export const Login = styled.div`
  display: flex;
  height: fit-content;
  align-items: center;
  margin-left: auto;
`
