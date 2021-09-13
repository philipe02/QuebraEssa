import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 25px;
`
export const TitleSectionIndicacao = styled.h1`
  font-weight: bold;
  font-size: 23px;
  text-align: center;
`
export const DivGridIndicacao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const DivIndicacao = styled.div`
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
export const DivTextIndicacao = styled.div`
  position: absolute;
  bottom: 0;
  text-align: center;
`
export const ImgIndicacoes = styled.img`
  width: 100%;
  height: 200px;
  /* border-radius: 50%; */
`
export const DivButton = styled.div`
  background-color: #c4c4c4;
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`
export const Estrelas = styled.div`
  width: 100px;
  color: #967100;
  font-size: 19pt;
  font-weight: 700;
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
