import styled from 'styled-components'

export const WrapperDetalheAmigo = styled.section`
  width: 100%;
  font-family: 'poppins', sans-serif;
`
export const DivDetalhesAmigos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30rem;
  background-color: #774fd1;
`
export const DivVoltar = styled.div`
  margin: 0 0 20rem;
  width: 90%;
`
export const DivBlocoImg = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
export const Name = styled.h1`
  text-align: center;
  color: #fff;
  font-weight: 500;
  font-size: 20pt;
`
export const NamePost = styled.h1`
  /* text-align: center; */
  font-size: 13pt;
  color: #000;
  margin: 0px 25px;
`
export const ImgAmigo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 20%;
  display: block;
  object-fit: cover;
  margin: 0 auto;
`
export const TextRecomendacao = styled.h2`
  text-align: center;
  font-size: 18pt;
  font-weight: 800;
`
export const ImgAmigoPost = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 20%;
  display: block;
  object-fit: cover;
  margin: 25px 25px 0 25px;
`
export const DivBlocoDetalhe = styled.div`
  margin: -23rem auto 5rem auto;
`
export const DivPost = styled.div`
  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 36px;
  width: 59rem;
`
export const DivCampoInput = styled.div`
  width: 110rem;
  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 20px;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-top: 25px;
  flex-wrap: wrap;
  section {
    margin: 15px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.2);
    padding: 20px;
    border-radius: 0 0 2px 2px;
    background-color: #fff;
  }
`

export const TextPost = styled.p`
  font-size: 11pt;
  font-weight: 800;

  margin: 13pz 13px;
  padding: 0px 25px;
`
export const DivRecomendacao = styled.div`
  width: 33rem;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  .svg-inline--fa {
    height: 3rem;
  }
`
export const divImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const ImgRecomendacao = styled.img`
  width: 55rem;
  height: 210px;
  margin: 0 auto;

  /* border-radius: 50%; */
`
export const DivTextRecomendacao = styled.div`
  position: absolute;
  bottom: 0;
  text-align: center;
`
export const Estrelas = styled.div`
  width: 100px;
  color: #967100;
  font-size: 19pt;
  font-weight: 700;
`
export const DivButton = styled.div`
  background-color: #c4c4c4;
  margin: 0 auto;
  width: 55rem;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`
export const Button = styled.button`
  width: 48px;
  height: 48px;
  border: 0;
  background: #282119;
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background: #865234;
  }
`
