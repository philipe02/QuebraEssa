import styled from 'styled-components'

export const WrapperSearchFriends = styled.section`
  width: 100%;
  font-family: 'poppins', sans-serif;
  z-index: 1;
`
export const DivBuscarAmigos = styled.div`
  background-color: #774fd1;
  background-position: top;
  display: flex;
  flex-direction: column;
  height: 35rem;
  position: relative;
`
export const DivVoltar = styled.div`
  cursor: pointer;
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 0;
`
export const DivContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: ;
`
export const DivBlocoImg = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 40px auto;
`
export const Name = styled.h1`
  text-align: center;
  font-size: 13pt;
`
export const ImgAmigo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 20%;
  display: block;
  object-fit: cover;
`
export const ButtonPesquisar = styled.button`
  width: 14rem;
  height: 37.09px;
  font-weight: 700;
  font-size: 15px;
  background-color: #9c69e2;
  color: #fff;
  border-radius: 50px;
  border: none;
  margin: 43px auto 0px auto;
  cursor: pointer;
  background: #774fd1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s;
  :hover {
    background: #8c7bb3;
  }
`
export const DivBlocoDetalhe = styled.div`
  margin-top: 140px;
`
export const DivCampoInput = styled.div`
  width: 110rem;
  margin: 64px auto;
  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 20px;
  padding: 64px 80px;
  overflow: hidden;
  position: absolute;
  margin: 0;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  top: 43rem;
  .input-container {
    position: relative;
  }

  input {
    border: 0;
    border-bottom: 2px solid #9e9e9e;
    outline: none;
    transition: 0.2s ease-in-out;
    box-sizing: border-box;
  }

  label {
    top: 0;
    left: 0;
    right: 0;
    color: #000;
    display: flex;
    align-items: center;
    position: absolute;
    font-size: 12pt;
    cursor: text;
    transition: 0.2s ease-in-out;
    box-sizing: border-box;
  }

  input,
  label {
    width: 100%;
    height: 3rem;
    font-size: 12pt;
  }
  input:valid,
  input:focus {
    border-bottom: 2px solid #353030c7;
  }

  input:valid + label,
  input:focus + label {
    color: #000;
    font-size: 0.8rem;
    top: -30px;
    pointer-events: none;
  }

  h1 {
    color: #616161;
    text-align: center;
    margin-bottom: 30px;
  }

  section {
    margin: 15px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.2);
    padding: 20px;
    border-radius: 0 0 2px 2px;
    background-color: #fff;
  }
`
