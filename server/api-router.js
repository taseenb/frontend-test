const config = require('./config')
const debug = require('debug')('server:api')
const express = require('express')
const axios = require('axios')

// Create a router
const router = express.Router()

// Yelp API details
// Example request: 'businesses/search?term=restaurant&location=Las+Vegas'
const baseURL = config.yelpApiBaseURL
const APIKey = config.yelpAPIKey
const validEndpoints = /\/businesses|\/events|\/categories/g

/**
 * Yelp API proxy: it sends all requests to Yelp unless they are not validEndpoints
 * Usage: /api/{any Yelp endpoint}
 */
router.get('/*', async function (req, res, next) {
  debug(req.url)

  debug(APIKey)

  // Check if the request is valid
  if (req.url.search(validEndpoints) === 0) {
    // Try fetching from Yelp
    try {
      const response = await axios.get(req.url, {
        baseURL,
        headers: {
          Authorization: `Bearer ${APIKey}`
        }
      })
      res.json(response.data)
    } catch (err) {
      handleError(res, err)
    }
  } else {
    handleError(res)
  }
})

/**
 * Response error handler
 * @param {*} res response
 * @param {*} err error
 */
function handleError (res, err = { message: 'Not found' }) {
  res.status(err.status || 404)
  res.json(err)
  res.end()
}

module.exports = router
