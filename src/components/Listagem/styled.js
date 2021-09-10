import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  border-radius: 2rem;
  margin-top: 1rem;
  background-color: #fff;
  border: 1px solid #e6e6f0;
  height: fit-content;
  box-shadow: 0 0 10px #ddd;
`
export const Title = styled.div`
  width: 100%;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: normal;
  margin-bottom: 1rem;
  font-size: 3rem;
`
export const ListaContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(208px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`
export const FornecedorContainer = styled.div`
  font-family: 'Poppins';
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem 0px;
  height: 30rem;
  background: rgb(255, 255, 255);
  border-radius: 0.5rem;
  overflow: hidden;
  :hover {
    box-shadow: 0 0 10px #ddd;
  }
  transition: box-shadow 200ms ease 0s;
`
export const FornecedorConteudoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`
export const FornecedorDadosContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  width: 100%;
`
export const FornecedorAvaliacaoContainer = styled.div`
  display: flex;
  background-color: lightgreen;
  font-size: 1.5rem;
  width: 6rem;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FornecedorFoto = styled.img`
  align-self: center;
  background-color: #eee;
  width: 100%;
  object-fit: contain;
`
export const FornecedorHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  padding: 0px 0.75rem;
  height: 3rem;
`
export const FornecedorQtdAvaliacao = styled.p`
  font-size: 1rem;
  margin-bottom: 0.3rem;
`
export const FornecedorFooter = styled.div``
export const FornecedorNome = styled.h2``

export const FornecedorServico = styled.h4``

export const FornecedorDescricao = styled.p``

export const FornecedorAvaliacao = styled.p`
  margin: 0;
  font-size: 1.5rem;
  margin-right: 0.3rem;
`
