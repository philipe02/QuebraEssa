import ContainerPrincipal from 'components/ContainerPrincipal'
const Principal = () => <ContainerPrincipal />

export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 100)
  })
  return { props: {} }
}
export default Principal
