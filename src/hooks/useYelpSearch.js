import { serialize } from '../helpers/objects'
import useFetch from './useFetch'

function useYelpSearch (params) {
  const url = `/api/businesses/search?${serialize(params)}`
  const response = useFetch(url)

  return response
}

export default useYelpSearch
