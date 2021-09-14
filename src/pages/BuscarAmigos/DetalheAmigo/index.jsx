import ContainerDetalheAmigo from 'components/ContainerDetalheAmigo'
const DetalheAmigo = () => <ContainerDetalheAmigo />

export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 100)
  })
  return { props: {} }
}
export default DetalheAmigo
