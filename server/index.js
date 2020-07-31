require('dotenv').config()
const config = require('./config')
const express = require('express')
const path = require('path')
const apiRouter = require('./api-router')

const app = express()

// Serve API (Yelp API proxy)
app.use('/api', apiRouter)

// Serve static files
app.use(express.static(path.resolve(__dirname, '../dist')))

// Note: routes (including 404) are managed by React Router in the client

app.listen(process.env.PORT || config.port, () =>
  console.log(`Listening on port ${process.env.PORT || config.port}`)
)

module.exports = app
