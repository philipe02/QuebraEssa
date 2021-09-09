import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  border-radius: 2rem;
  margin-top: 1rem;
  background-color: #fff;
  border: 1px solid #e6e6f0;
`
export const Title = styled.div`
  width: 100%;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: normal;
  font-size: 3rem;
`
export const ListaContainer = styled.div`
  display: block;
  width: 100%;
`

export const FornecedorContainer = styled.div`
  display: grid;
  grid-template-columns: 20rem 1fr;
  border: 1px solid black;
  padding: 1rem;
`
export const FornecedorDadosContainer = styled.div``
export const FornecedorFoto = styled.img`
  border-radius: 2rem;
  margin-right: 1rem;
  width: 20rem;
  object-fit: contain;
`

export const FornecedorNome = styled.h2``

export const FornecedorServico = styled.h3``

export const FornecedorDescricao = styled.p``

export const FornecedorAvaliacao = styled.p``
