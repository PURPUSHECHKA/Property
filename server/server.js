import express from 'express'
import http from 'http'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import favicon from 'serve-favicon'
import axios from 'axios'

import config from './config'
import mongooseService from './services/mongoose'

const { resolve } = require('path')

const server = express()
const httpServer = http.createServer(server)

const PORT = config.port
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0
const middleware = [
  cors(),
  cookieParser(),
  express.json({ limit: '50kb' }),
  express.static(resolve(__dirname, '../dist')),
  favicon(`${__dirname}/public/favicon.ico`)
]

middleware.forEach((it) => server.use(it))

server.get('/', (req, res) => {
  res.send('Express Server')
})

// MongoDB
if (config.mongoEnabled) {
  // eslint-disable-next-line
  console.log('MongoDB Enabled: ', config.mongoEnabled)
  mongooseService.connect()
}

// SocketsIO
// if (config.socketsEnabled) {
//   // eslint-disable-next-line
//   console.log('Sockets Enabled: ', config.socketsEnabled)
//   const socketIO = io(httpServer, {
//     path: '/ws'
//   })

//   socketIO.on('connection', (socket) => {
//     console.log(`${socket.id} login`)

//     socket.on('disconnect', () => {
//       console.log(`${socket.id} logout`)
//     })
//   })
// }

server.get('/api/v1/:adress', async (req, res) => {
  const { adress } = req.params
  const url = `https://lk.rosreestr.ru/account-back/address/search?term=${adress}`
  const encodingUrl = encodeURI(url);
  const getAskByReestr = await axios(encodingUrl)
    .then(({ data }) => {
      axios({
        headers: {
          'Host': 'lk.rosreestr.ru',
          'Accept': 'application/json',
          'Cookie': 'hazelcast.sessionId=HZCCD7B2FC6B8E4216AA4472DF0691DF4C',
        },
        method: 'POST',
        url: 'https://lk.rosreestr.ru/account-back/on',
        data: {
          'filterType': 'cadastral',
          'cadNumbers': [`${data[0].cadnum}`]
        }
      })
        .then((result) => console.log('RESULT', result.data))
    })
    .catch((e) => console.log('ERROR', e))
  res.json(getAskByReestr)
})

server.use('/api/', (req, res) => {
  res.status(404)
  res.end()
})

httpServer.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`Serving at http://localhost:${PORT}`)
})
