import IntroBanner from 'components/IntroBanner'
import PesquisaFornecedores from 'containers/PesquisaFornecedores'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const fornecedoresInicial = [
  {
    id: 1,
    nome: 'José',
    servico: { titulo: 'Marceneiro' },
    desc: 'Manicure profissional',
    aval: 3
  },
  {
    id: 2,
    nome: 'Maria',
    servico: { titulo: 'Motorista' },
    desc: 'Motorista profissional',
    aval: 7
  },
  {
    id: 3,
    nome: 'Rodrigo',
    servico: { titulo: 'Backend' },
    desc: 'Programador profissional',
    aval: 9
  },
  {
    id: 4,
    nome: 'João Vitor',
    servico: { titulo: 'Frontend' },
    desc: 'Programador profissional',
    aval: 10
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
      <PesquisaFornecedores
        handleChangeFiltros={handleChangeFiltros}
        atualizarLista={atualizarLista}
        filtros={filtros}
        fornecedores={fornecedores}
      />
    </>
  )
}

export default Pesquisar
