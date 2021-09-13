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
export const SearchIcon = styled.img`
  width: 2rem;
  opacity: 0.5;
  object-fit: contain;
  cursor: pointer;
`
export const Menu = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 400;
`
export const MenuItem = styled.a`
  margin: 1rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-size: 2rem;
  color: #000;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  position: relative;
  :hover {
    background-color: #ededed;
  }
  :visited,
  :hover,
  :focus,
  :active {
    color: #000;
  }
`
export const MenuDropdown = styled.div``
export const SubMenuItem = styled.a`
  margin: 1rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-size: 1.8rem;
  font-weight: 400;
  color: #000;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  :hover {
    background-color: #ededed;
  }
  :visited,
  :hover,
  :active {
    color: #000;
  }
`
export const DropDown = styled.div`
  margin-top: 2rem;
  margin-left: -2rem;
  background-color: #fff;
  border-radius: 1rem;
  padding: 2rem 0;
  transition: opacity 1s ease;
`
export const SearchContainer = styled.div`
  display: flex;
  align-self: center;
  background-color: #eee;
  padding: 1rem;
  width: 35rem;
  height: fit-content;
  border-radius: 2rem;
  margin: 0 3rem;
`
export const Search = styled.input`
  font-family: 'Roboto', sans-serif;
  border: none;
  background-color: inherit;
  width: 100%;
  font-size: 2rem;
  margin-left: 1rem;
  :focus {
    outline: none;
  }
`
export const AmigosContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`
export const AmigosImg = styled.img`
  height: 4rem;
  object-fit: contain;
`
export const AmigosLabel = styled.label`
  padding: 1rem;
  font-size: medium;
`
export const UserHeader = styled.a`
  display: flex;
  margin-left: auto;
  margin-right: 2rem;
  align-items: center;
  position: relative;
`
export const UserLabel = styled.label`
  cursor: pointer;
  padding: 1rem;
  font-size: medium;
  font-family: 'Poppins';
`
export const UserPhoto = styled.img`
  height: 4rem;
  object-fit: contain;
  border-radius: 50%;
`
export const UserMenu = styled.div`
  background-color: #fff;
  border-radius: 1rem;
`
export const UserBtn = styled.button`
  background-color: #fff;
  color: #000;
  border: none;
  margin: 0;
  cursor: pointer;
  :hover,
  :focus,
  :active {
    box-shadow: none;
    color: #000;
    background-color: #ededed;
  }
`
export const UserOption = styled.a`
  margin-left: 1rem;
  font-family: 'Poppins';
  font-size: 1.5rem;
  width: 100%;
  color: #000;
  padding-right: 5rem;
  :visited,
  :hover,
  :active {
    color: #000;
    background-color: #ededed;
  }
`

export const Login = styled.div`
  display: flex;
  height: fit-content;
  align-items: center;
  margin-left: auto;
`
export const Signin = styled.button`
  margin: 1rem;
  padding: 1rem 3rem;
  border: none;
  background-color: #fff;
  font-size: 1.5rem;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 2rem;
  :hover {
    background-color: #ededed;
  }
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
  cursor: pointer;
  :hover {
    background-color: #c7bad9;
  }
`
