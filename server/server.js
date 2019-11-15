const path = require('path')
const express = require('express')

const server = express()

const routes = require('./routes/routes')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
// server.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   next()
// })

server.use('/api', routes)


module.exports = server
