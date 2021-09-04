import Filtros from 'components/Filtros'
import Listagem from 'components/Listagem'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import * as S from './styles'

const fornecedoresInicial = [
  {
    id: 1,
    nome: 'José',
    servico: { titulo: 'Marceneiro' },
    desc: 'Manicure profissional'
  },
  {
    id: 2,
    nome: 'Maria',
    servico: { titulo: 'Motorista' },
    desc: 'Motorista profissional'
  }
]
const filtrosInicial = {
  servico: '',
  fornecedor: '',
  nota: ''
}

const Pesquisar = () => {
  const router = useRouter()
  const [filtros, setFiltros] = useState(filtrosInicial)
  const [fornecedores, setFornecedores] = useState(fornecedoresInicial)

  const handleChangeFiltros = ({ target }) => {
    let name = target.name
    let value = target.value

    setFiltros({ ...filtros, [name]: value })
  }

  const atualizarLista = (reset) => {
    if (reset) {
      setFornecedores(fornecedoresInicial)
      return
    }
    let fornecedoresAtualizado = fornecedores.filter(
      (fornecedor) => filtros.servico === fornecedor.servico.titulo
    )
    setFornecedores(fornecedoresAtualizado)
  }

  useEffect(() => {
    let filtroFormatado = filtros
    Object.keys(router.query).forEach((filtro) => {
      filtroFormatado = { ...filtroFormatado, [filtro]: router.query[filtro] }
    })
    setFiltros(filtroFormatado)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query])

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

export default Pesquisar
