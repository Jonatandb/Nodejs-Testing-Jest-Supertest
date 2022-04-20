import app from '../src/app.js'
import request from 'supertest'

describe('GET /tasks', () => {
  it('should respond with a 200 status code', async () => {
    const response = await request(app).get('/tasks').send()
    expect(response.statusCode).toBe(200)
  })

  it('shoudl respond with an array', async () => {
    const response = await request(app).get('/tasks').send()
    expect(response.body).toBeInstanceOf(Array)
  })
})
