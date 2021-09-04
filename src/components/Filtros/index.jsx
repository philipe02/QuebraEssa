import * as S from './styles'

const servicos = [{ titulo: 'Marceneiro' }, { titulo: 'Motorista' }]

const Filtros = ({ handleChange, atualizarLista }) => {
  const limparFiltros = () => {
    document.querySelector('[name=servico]').value = ''
    document.querySelector('[name=fornecedor]').value = ''
    document.querySelector('[name=nota]').value = ''
    console.log('aa')
    atualizarLista(true)
  }

  return (
    <S.Wrapper>
      <S.Title>Pesquisa</S.Title>
      <S.Select name="servico" onChange={handleChange}>
        <S.Option value="">Selecione um serviço</S.Option>
        {servicos.map((servico) => {
          return (
            <S.Option key={servico.titulo} value={servico.titlo}>
              {servico.titulo}
            </S.Option>
          )
        })}
      </S.Select>
      <S.Input
        name="fornecedor"
        placeholder="Insira o nome do fornecedor"
        onChange={handleChange}
      />
      <S.Input
        name="nota"
        placeholder="Insira a nota mínima"
        onChange={handleChange}
      />
      <S.Button onClick={() => atualizarLista()}>Pesquisar</S.Button>
      <S.Button onClick={limparFiltros}>Limpar filtros</S.Button>
    </S.Wrapper>
  )
}

export default Filtros
