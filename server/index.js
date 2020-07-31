require('dotenv').config()
const config = require('./config')
const express = require('express')
const path = require('path')
const apiRouter = require('./api-router')

const app = express()

// Serve static files
app.use(express.static(path.resolve(__dirname, '../dist')))

// Serve API (Yelp API proxy)
app.use('/api', apiRouter)

// Catch 404
// app.use('*', function (req, res, next) {
//   res.status(404)
//   res.sendFile(path.resolve(__dirname, '404.html'))
// })

app.listen(process.env.PORT || config.port, () =>
  console.log(`Listening on port ${process.env.PORT || config.port}`)
)

module.exports = app
