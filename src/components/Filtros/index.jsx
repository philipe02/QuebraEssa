import * as S from './styles'

const servicos = [{ titulo: 'Marceneiro' }, { titulo: 'Motorista' }]

const Filtros = ({ handleChange, atualizarLista }) => {
  const limparFiltros = () => {
    document.querySelector('[name=servico]').value = ''
    document.querySelector('[name=fornecedor]').value = ''
    document.querySelector('[name=avaliacao]').value = ''
    atualizarLista(true)
  }
  const numberFormatter = ({ target }) => {
    target.value = target.value.replace(/[^0-9]/g, '')
  }
  /*  useEffect(() => {
    const ratingStars = [...document.getElementsByClassName('rating__star')]
    executeRating(ratingStars)
  }) */

  /* function executeRating(stars) {
    const starClassActive = 'rating__star fas fa-star'
    const starClassInactive = 'rating__star far fa-star'
    const starsLength = stars.length
    let i
    stars.map((star) => {
      star.onclick = () => {
        i = stars.indexOf(star)

        if (star.className === starClassInactive) {
          for (i; i >= 0; --i) stars[i].className = starClassActive
        } else {
          for (i; i < starsLength; ++i) stars[i].class = starClassInactive
        }
      }
    })
  } */

  return (
    <S.Wrapper>
      <S.Title>Filtros</S.Title>
      <S.FormContainer>
        <S.FormLabel>Serviço</S.FormLabel>
        <S.Select
          className="form-control"
          name="servico"
          onChange={handleChange}
        >
          <S.Option value="">Selecione um serviço</S.Option>
          {servicos.map((servico) => {
            return (
              <S.Option key={servico.titulo} value={servico.titlo}>
                {servico.titulo}
              </S.Option>
            )
          })}
        </S.Select>
      </S.FormContainer>
      <S.FormContainer>
        <S.FormLabel>Fornecedor</S.FormLabel>
        <S.Input
          className="form-control"
          name="fornecedor"
          placeholder="Insira o nome do fornecedor"
          onChange={handleChange}
        />
      </S.FormContainer>
      <S.FormContainer>
        <S.FormLabel>Avaliação mínima</S.FormLabel>
        <S.Input
          className="form-control avaliacao"
          name="avaliacao"
          pattern="[0-9]{2}"
          placeholder="0 a 10"
          onInput={numberFormatter}
          maxLength="2"
          onChange={handleChange}
        />
      </S.FormContainer>
      <S.ButtonContainer>
        <S.Button className="btn btn-primary" onClick={() => atualizarLista()}>
          Pesquisar
        </S.Button>
        <S.Button className="btn btn-primary" onClick={limparFiltros}>
          Limpar filtros
        </S.Button>
      </S.ButtonContainer>
    </S.Wrapper>
  )
}

export default Filtros
