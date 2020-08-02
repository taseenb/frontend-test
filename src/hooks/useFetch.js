import { useState, useEffect } from 'react'
import axios from 'axios'

const cache = {}

const apiState = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
}

const initialState = {
  state: apiState.LOADING,
  error: null,
  data: null
}

function useFetch (url) {
  const [response, setResponse] = useState(initialState)

  useEffect(() => {
    if (!url) return

    // Create variable for cancel token
    let source = null

    if (cache[url]) {
      setResponse({
        state: apiState.SUCCESS,
        error: null,
        data: cache[url]
      })
    } else {
      // Create cancel token source
      source = axios.CancelToken.source()

      setResponse(initialState)

      axios
        .get(url, {
          // Set cancel token
          cancelToken: source.token
        })
        .then(res => {
          // Cache data
          cache[url] = res.data

          setResponse({
            state: apiState.SUCCESS,
            error: null,
            data: res.data
          })
        })
        .catch(error => {
          if (!axios.isCancel(error)) {
            setResponse({
              state: apiState.ERROR,
              error: error.response ? error.response : true,
              data: null
            })
          }
        })
    }

    return () => {
      // Cancel request if needed
      if (source) {
        source.cancel('Request canceled')
      }
    }
  }, [url])

  return response
}

export default useFetch
