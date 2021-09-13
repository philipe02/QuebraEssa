import * as S from './styles'
import Filtros from 'components/Filtros'
import Listagem from 'components/Listagem'

const PesquisaFornecedores = ({
  loading,
  handleChangeFiltros,
  atualizarLista,
  fornecedores,
  resetFilters
}) => {
  return (
    <S.Wrapper>
      <Filtros
        handleChange={handleChangeFiltros}
        atualizarLista={atualizarLista}
        resetFilters={resetFilters}
      />
      <Listagem loading={loading} fornecedores={fornecedores} />
    </S.Wrapper>
  )
}

export default PesquisaFornecedores
