import ContainerSearchFriends from 'components/ContainerSearchFriends'
const SearchFriends = () => <ContainerSearchFriends />

export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 100)
  })
  return { props: {} }
}
export default SearchFriends
