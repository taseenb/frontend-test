import useFetch from './useFetch'

function useYelpReviews (id) {
  const url = `/api/businesses/${id}/reviews`
  return useFetch(url)
}

export default useYelpReviews
