import useFetch from './useFetch'

function useYelpDetails (id) {
  const url = `/api/businesses/${id}`

  return useFetch(url)
}

export default useYelpDetails
