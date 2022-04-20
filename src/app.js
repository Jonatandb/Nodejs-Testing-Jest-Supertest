import express from 'express'
import { v4 } from 'uuid'

const app = express()

app.use(express.json())

app.get('/tasks', (req, res) => {
  res.send([])
})

app.post('/tasks', (req, res) => {
  const { title, description } = req.body

  if (!title || !description) return res.status(400).send()

  res.json({
    title,
    description,
    id: v4(),
  })
})

app.get('/ping', (req, res) => {
  res.send('pong')
})

export default app
