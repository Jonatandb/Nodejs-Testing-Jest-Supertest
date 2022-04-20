import express from 'express'

const app = express()

app.get('/tasks', (req, res) => {
  res.send({ tasks: [] })
})

app.get('/ping', (req, res) => {
  res.send('pong')
})

export default app
