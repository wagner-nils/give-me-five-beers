// TODO Happy route: tests for expected input
import request from 'supertest'
import app from '../index'

describe('GET /', () => {
    it('responds with message', async () => {
        return request(app)
            .get('/')
            .expect(200)
            .then(response => {
                console.log(response.body)
                expect(response.text).toBe('hello from router, i love typescript')
            })
    })
});
