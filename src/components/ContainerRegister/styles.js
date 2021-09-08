import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  font-family: 'Poppins', sans-serif;
  img {
    object-fit: cover;
  }
`
export const SectionRegistrar = styled.section`
  width: 87%;
  height: 393px;
  border-radius: 10px;
  background-color: #0f033096;
  color: #fff;
  position: relative;
  margin: 40px auto;
`
export const TitleRegister = styled.h3`
  font-weight: bold;
  font-size: 34px;
  @media (max-width: 1226px) {
    font-weight: bold;
    font-size: 29px;
  }
`
export const imgRegistrar = styled.img`
  width: 25%;
  height: 104%;
  position: absolute;
  bottom: 0;
  right: 8rem;
  @media (max-width: 1226px) {
    width: 30%;
    font-size: 27px;
    height: 104%;
    position: absolute;
    bottom: 0;
    right: 13rem;
  }
`
export const DivContainerRegister = styled.div`
  margin: 25px 25px 0px 25px;
  padding: 12rem 25px;
`
export const Register = styled.button`
  width: 174px;
  height: 53px;
  margin: 1rem;
  padding: 1rem 3rem;
  background-color: #ffffff;
  border: none;
  border-radius: 0.8rem;
  color: #000;
  font-weight: bold;
  font-size: 1.7rem;
  cursor: pointer;
  :hover {
    background-color: #c7bad9;
  }
`
