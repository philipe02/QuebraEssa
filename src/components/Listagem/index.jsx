import * as S from './styled'

const Listagem = ({ fornecedores }) => {
  return (
    <S.Wrapper>
      <S.Title>Listagem</S.Title>
      <S.ListaContainer>
        {fornecedores.length ? (
          fornecedores.map((fornecedor) => {
            return (
              <S.FornecedorContainer key={fornecedor.id}>
                <S.FornecedorFoto
                  className="foto"
                  src="https://picsum.photos/200"
                />
                <S.FornecedorDadosContainer>
                  <S.FornecedorNome className="nome">
                    {fornecedor.nome}
                  </S.FornecedorNome>
                  <S.FornecedorServico className="servico">
                    {fornecedor.servico.titulo}
                  </S.FornecedorServico>
                  <S.FornecedorDescricao className="descricao">
                    {fornecedor.desc}
                  </S.FornecedorDescricao>
                  <S.FornecedorAvaliacao className="avaliacao">
                    {fornecedor.aval}
                  </S.FornecedorAvaliacao>
                </S.FornecedorDadosContainer>
              </S.FornecedorContainer>
            )
          })
        ) : (
          <h2>Não há fornecedores para serem exibidos</h2>
        )}
      </S.ListaContainer>
    </S.Wrapper>
  )
}

export default Listagem
