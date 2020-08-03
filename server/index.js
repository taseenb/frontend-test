require('dotenv').config()
const config = require('./config')
const debug = require('debug')
const compression = require('compression')
const express = require('express')
const path = require('path')
const apiRouter = require('./api-router')

debug('server:express')

const app = express()

app.use(compression())

// Serve all static files
app.use(express.static(path.resolve(__dirname, '../dist')))

// Serve API (Yelp API proxy)
app.use('/api', apiRouter)

// Serve index.html from any route
app.use('*', (req, res) => {
  const indexHtml = path.resolve(__dirname, '../dist/index.html')
  res.sendFile(indexHtml)
})

// Note: routes (including 404) are managed by React Router in the client

app.listen(process.env.PORT || config.port, () =>
  console.log(`Listening on port ${process.env.PORT || config.port}`)
)

module.exports = app
