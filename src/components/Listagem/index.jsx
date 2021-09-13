import router from 'next/router'
import * as S from './styles'

const Listagem = ({ fornecedores, loading }) => {
  return (
    <S.Wrapper>
      <S.Title>Listagem</S.Title>
      <S.ListaContainer className="row">
        {loading ? (
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : fornecedores.length ? (
          fornecedores.map((fornecedor) => {
            return (
              <div key={fornecedor.id} className="col mb-4">
                <S.FornecedorContainer
                  className="card"
                  onClick={() =>
                    router.push(`/DetalheFornecedor/${fornecedor.id}`)
                  }
                >
                  <S.FornecedorFoto
                    className="foto card-img-top"
                    src="https://picsum.photos/200"
                  />
                  <S.FornecedorConteudoContainer className="card-body">
                    <S.FornecedorNome className="nome">
                      {fornecedor.nome}
                    </S.FornecedorNome>
                    <S.FornecedorServico className="servico">
                      {fornecedor.servico}
                    </S.FornecedorServico>
                    <S.FornecedorDescricao className="descricao">
                      {fornecedor.descricao}
                    </S.FornecedorDescricao>

                    <S.FornecedorAvaliacaoContainer nota={fornecedor.nota}>
                      Nota:
                      <S.FornecedorAvaliacao className="avaliacao">
                        <strong>{fornecedor.nota.toFixed(1)}</strong>
                      </S.FornecedorAvaliacao>
                      <S.FornecedorQtdAvaliacao>{`(${fornecedor.qtdVotos})`}</S.FornecedorQtdAvaliacao>
                    </S.FornecedorAvaliacaoContainer>
                  </S.FornecedorConteudoContainer>
                </S.FornecedorContainer>
              </div>
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
