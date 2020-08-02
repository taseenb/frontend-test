import useFetch from './useFetch'

function useYelpCategories () {
  const url = '/api/categories'
  return useFetch(url)
}

export default useYelpCategories
