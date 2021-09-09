import Filtros from 'components/Filtros'
import IntroBanner from 'components/IntroBanner'
import Listagem from 'components/Listagem'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import * as S from './styles'

const fornecedoresInicial = [
  {
    id: 1,
    nome: 'José',
    servico: { titulo: 'Marceneiro' },
    desc: 'Manicure profissional',
    aval: 4
  },
  {
    id: 2,
    nome: 'Maria',
    servico: { titulo: 'Motorista' },
    desc: 'Motorista profissional',
    aval: 3
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
    let fornecedoresAtualizado = fornecedoresInicial.filter(
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
    atualizarLista()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query])

  return (
    <>
      <IntroBanner />
      <S.Wrapper>
        <Filtros
          handleChange={handleChangeFiltros}
          atualizarLista={atualizarLista}
        />
        <Listagem filter={filtros} fornecedores={fornecedores} />
      </S.Wrapper>
    </>
  )
}

export default Pesquisar
