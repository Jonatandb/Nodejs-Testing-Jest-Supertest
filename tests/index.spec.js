import app from '../src/app.js'
import request from 'supertest'

describe('GET /ping', () => {
  it('should return pong', async () => {
    const response = await request(app).get('/ping').send()
    console.log(response.text)
  })
})
