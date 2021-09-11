import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  font-family: 'Poppins', sans-serif;
  img {
    object-fit: cover;
  }
`
export const Logo = styled.img`
  width: 68rem;
  @media (max-width: 1226px) {
    width: 50rem;
  }
`
export const DivGridContrate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const DivIntroducao = styled.div`
  background-color: #774fd1;
  color: #fff;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TextIntroducao = styled.h1`
  font-family: 'Poppins', sans-serif;
  @media (max-width: 1226px) {
    font-size: 16pt;
  }
`
export const TextHelp = styled.h1`
  width: 41rem;
  font-size: 20pt;
  line-height: 40px;
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1226px) {
    font-size: 17pt;
  }
`
export const SectionRecomendacoes = styled.section`
  width: 67%;
  position: relative;
`
export const DivRecomendacoes = styled.div`
  position: relative;
  margin-top: 20px;
`
export const ImgRecomendacoes = styled.img`
  width: 334px;
  height: 366px;
  border-radius: 6px;
`
export const DivEfeito = styled.div`
  position: absolute;
  right: 0%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #774fd1;
`
export const DivEfeito2 = styled.div`
  position: absolute;
  left: 0%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #774fd1;
`
export const DivIndicacoes = styled.div`
  position: absolute;
  left: 31%;
  top: 21%;
  z-index: 1;
  width: 420px;
  height: 215px;
  padding: 5% 5%;
  background-color: #774fd1;
  border-radius: 0.8rem;
  color: #fff;
`
export const DivAvaliacoes = styled.div`
  position: absolute;
  right: 32%;
  top: 23%;
  z-index: 1;
  width: 420px;
  height: 215px;
  padding: 5% 5%;
  background-color: #774fd1;
  border-radius: 0.8rem;
  color: #fff;
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 23px;
`
export const SectionDepoimentos = styled.section`
  width: 100%;
`
export const DivGridDepoimentos = styled.div`
  display: flex;
  height: 400px;
  justify-content: center;
`
export const DivCardDepoimentos = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
  @media (max-width: 1226px) {
    margin-top: -50px;
  }
`
export const TitleDepoimentos = styled.h3`
  position: absolute;
  color: #fff;
  width: 50%;
  font-size: 15pt;
  border: solid 1px #fff;
`
export const imgDepoimentos = styled.img`
  width: 399px;
  height: 395px;
  border-radius: 5%;
  @media (min-width: 1137px) {
    width: 364px;
    height: 364px;
  }
  @media (max-width: 1136px) {
    width: 304px;
    height: 305px;
  }
`
