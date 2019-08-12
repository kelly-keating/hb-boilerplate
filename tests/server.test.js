let request = require('supertest')

let server = require('../server')

test('Get home page', (done) => {
  request(server)
    .get('/')
    .expect(200)
    .end((error, res) => {
      expect(res.text).toContain('Welcome!')
      done()
    })
})
