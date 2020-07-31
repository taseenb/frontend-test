const debug = require('debug')('server:config')

// Get Yelp API Key
// debug(process.env.ClientID)
debug(process.env.APIKey)

module.exports = {
  env: process.env.NODE_ENV,
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || '8080',
  yelpAPIKey: process.env.APIKey,
  yelpApiBaseURL: 'https://api.yelp.com/v3/'
}
