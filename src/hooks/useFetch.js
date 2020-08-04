import { useState, useEffect } from 'react'
import axios from 'axios'

const cache = {}

export const API_STATE = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
}

const INITIAL_STATE = {
  state: API_STATE.LOADING,
  error: null,
  data: null
}

function useFetch (url) {
  const [response, setResponse] = useState(INITIAL_STATE)

  useEffect(() => {
    if (!url) return

    // Create variable for cancel token
    let source = null

    if (cache[url]) {
      // Return cached response if available
      setResponse(cache[url])
    } else {
      // Create cancel token source
      source = axios.CancelToken.source()

      setResponse(INITIAL_STATE)

      axios
        .get(url, {
          // Set cancel token
          cancelToken: source.token
        })
        .then(res => {
          const resObj = {
            state: API_STATE.SUCCESS,
            error: null,
            data: res.data
          }

          // Cache successful reponse
          cache[url] = resObj

          setResponse(resObj)
        })
        .catch(error => {
          if (!axios.isCancel(error)) {
            setResponse({
              state: API_STATE.ERROR,
              error: error.response ? error.response : {},
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
