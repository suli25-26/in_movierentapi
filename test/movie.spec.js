import request from 'supertest'
import app from '../app/app.js'

describe('/api/movies', () => {
    const restype= 'application/json; charset=utf-8'
    var token = null

    it('post /movies ', async () => {
      await request(app)
        .post('/api/movies')
        .set('Accept', 'application/json')
        .send({
            name: 'Something'
        })
        .expect('Content-Type', restype)
        .expect(201)

    })
    it('get /movies', async () => {
      await request(app)
        .get('/api/movies')
        .set('Accept', 'application/json')
        .expect('Content-Type', restype)
        .expect(200)
    })
    it('put /movies/:id', async () => {
      await request(app)
        .put('/api/movies/1')
        .set('Accept', 'application/json')
        .send({
            name: 'Another'
        })
        .expect('Content-Type', restype)
        .expect(200)
    })
    it('delete /movies/:id', async () => {
      await request(app)
        .delete('/api/movies/1')
        .set('Accept', 'application/json')
        .expect(200)
    })
})
