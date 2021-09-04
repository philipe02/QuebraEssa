import * as S from './styled'

const Listagem = ({ fornecedores }) => {
  return (
    <S.Wrapper>
      <h1>Listagem</h1>
      {fornecedores.map((fornecedor) => {
        return (
          <S.FornecedorContainer key={fornecedor.id}>
            <S.FornecedorNome>{fornecedor.nome}</S.FornecedorNome>
            <S.FornecedorServico>
              {fornecedor.servico.titulo}
            </S.FornecedorServico>
            <S.FornecedorDescricao>{fornecedor.desc}</S.FornecedorDescricao>
          </S.FornecedorContainer>
        )
      })}
    </S.Wrapper>
  )
}

export default Listagem
