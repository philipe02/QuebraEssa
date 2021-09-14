import styled from 'styled-components'

export const WrapperSearchFriends = styled.section`
  width: 100%;
  font-family: 'poppins', sans-serif;
`
export const DivBuscarAmigos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30rem;
  background-color: #774fd1;
`
export const DivVoltar = styled.div`
  cursor: pointer;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 0;
  margin: 0 0 20rem;
  width: 90%;
}
`
export const DivBlocoDetalhe = styled.div`
  margin: -23rem auto 5rem auto;
  display: flex;
  justify-content: center;
`
export const ImgCliente = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`
export const NameCliente = styled.h3`
  font-size: 15pt;
  margin-left: 6px;
  font-weight: bold;
`
export const divCliente = styled.div`
  cursor: pointer;
  margin-top: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 150px;
  position: relative;
  :hover {
    background-color: #e0dcdc;
  }
`
export const DivPlus = styled.div`
  position: absolute;
  align-items: center;
  display: flex;
  justify-content: center;
  right: 4%;
  border-bottom-right-radius: 50%;
  border-top-right-radius: 50%;
  background-color: #774fd1;
  border-radius: 50%;
  background-color: #774fd1;
  width: 8%;
  height: 46px;
  cursor: pointer;
`
export const DivCampoInput = styled.div`
  width: 700px;
  height: 47rem;
  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 11px;
  padding: 64px 80px;
  overflow: hidden;
  overflow: scroll;
  ::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }
  ::-webkit-scrollbar {
    width: 6px;
    background: #f4f4f4;
  }
  ::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }
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
