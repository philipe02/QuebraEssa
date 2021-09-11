import * as S from './styles'
import Filtros from 'components/Filtros'
import Listagem from 'components/Listagem'

const PesquisaFornecedores = ({
  handleChangeFiltros,
  atualizarLista,
  filtros,
  fornecedores
}) => {
  return (
    <S.Wrapper>
      <Filtros
        handleChange={handleChangeFiltros}
        atualizarLista={atualizarLista}
      />
      <Listagem filter={filtros} fornecedores={fornecedores} />
    </S.Wrapper>
  )
}

export default PesquisaFornecedores
