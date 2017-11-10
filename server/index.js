const morgan = require('morgan')
const express = require('express')
const path = require('path')

const api = require('./api')

const PORT = process.env.PORT || 8080

const app = express()
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use('/api', api)
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})

module.exports = app
const createApp = () => {
  app.listen(PORT, () => console.log(`Choo Choo all aboard port${PORT}`))
}

createApp()
