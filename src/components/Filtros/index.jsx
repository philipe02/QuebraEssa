import { useEffect, useState } from 'react'
import { getAllServicos } from 'service/servicos'
import * as S from './styles'

const Filtros = ({ handleChange, atualizarLista }) => {
  const [servicos, setServicos] = useState([])
  const limparFiltros = () => {
    document.querySelector('[name=servico]').value = ''
    document.querySelector('[name=nome]').value = ''
    document.querySelector('[name=avaliacao]').value = ''
    atualizarLista(true)
  }
  const numberFormatter = ({ target }) => {
    target.value = target.value.replace(/[^0-9]/g, '')
  }
  useEffect(() => {
    getAllServicos().then(({ data }) => {
      setServicos(data.content)
    })
  }, [])
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
          name="nome"
          placeholder="Insira o nome do fornecedor"
          onChange={handleChange}
        />
      </S.FormContainer>
      <S.FormContainer>
        <S.FormLabel>Nota mínima</S.FormLabel>
        <S.Input
          className="form-control avaliacao"
          name="avaliacao"
          pattern="[0-9]{1}"
          placeholder="0 a 5"
          onInput={numberFormatter}
          maxLength="1"
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
