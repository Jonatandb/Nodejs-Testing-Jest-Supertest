import app from '../src/app.js'
import request from 'supertest'

describe('GET /tasks', () => {
  it('should respond with a 200 status code', async () => {
    const response = await request(app).get('/tasks').send()
    expect(response.statusCode).toBe(200)
  })

  it('should respond with an array', async () => {
    const response = await request(app).get('/tasks').send()
    expect(response.body).toBeInstanceOf(Array)
  })
})

describe('POST /tasks', () => {
  describe('Given a title and description', () => {
    const newTask = {
      title: 'Test task',
      description: 'Test description',
    }

    it('should respond with a 200 status code', async () => {
      const response = await request(app).post('/tasks').send(newTask)
      expect(response.statusCode).toBe(200)
    })

    it('should have content type application/json', async () => {
      const response = await request(app).post('/tasks').send(newTask)
      expect(response.headers['content-type']).toEqual(
        expect.stringContaining('json'),
      )
    })

    it('should respond with a Task ID', async () => {
      const response = await request(app).post('/tasks').send(newTask)
      expect(response.body.id).toBeDefined()
    })
  })

  describe('When title and description are missing', () => {
    it('should respond with a 400 status code', async () => {
      const response = await request(app).post('/tasks').send({})
      expect(response.statusCode).toBe(400)
    })
  })
})
