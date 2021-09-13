import IntroBanner from 'components/IntroBanner'
import PesquisaFornecedores from 'containers/PesquisaFornecedores'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getAllFornecedores } from 'service/fornecedores'

const filtrosInicial = {
  servico: '',
  fornecedor: '',
  nota: ''
}

const Pesquisar = () => {
  const router = useRouter()
  const [filtros, setFiltros] = useState(filtrosInicial)
  const [fornecedores, setFornecedores] = useState([])
  const [carregando, setCarregando] = useState(false)

  const handleChangeFiltros = ({ target }) => {
    let name = target.name
    let value = target.value

    setFiltros({ ...filtros, [name]: value })
  }
  const resetFilters = () => setFiltros(filtrosInicial)

  const atualizarLista = (params) => {
    //Adicionando parametro para atualizar tanto não ficar atualizando ao digitar o filtro
    if (params) {
      setCarregando(true)
      getAllFornecedores(params)
        .then(({ data }) => {
          setFornecedores(data.content)
        })
        .finally(() => setCarregando(false))
      return
    }
    setCarregando(true)
    getAllFornecedores(filtros)
      .then(({ data }) => {
        setFornecedores(data.content)
      })
      .finally(() => setCarregando(false))
  }

  useEffect(() => {
    if (Object.keys(router.query).includes('search')) {
      setFiltros({ search: router.query.search })
      return
    }
    let filtroFormatado = filtros
    Object.keys(router.query).forEach((filtro) => {
      filtroFormatado = { ...filtroFormatado, [filtro]: router.query[filtro] }
    })
    atualizarLista(filtroFormatado)
  }, [router.query])

  return (
    <>
      <IntroBanner />
      <PesquisaFornecedores
        loading={carregando}
        handleChangeFiltros={handleChangeFiltros}
        atualizarLista={atualizarLista}
        fornecedores={fornecedores}
        resetFilters={resetFilters}
      />
    </>
  )
}

export default Pesquisar
