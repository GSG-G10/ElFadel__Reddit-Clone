const request = require('supertest');
const app = require('../server/app');

const connection = require('../server/database/connection');
const dbBuild = require('../server/database/data/build');

beforeAll(() => dbBuild());
afterAll(() => connection.end());

describe(' POST /signUp', () => {
  test('responds with cookie', (done) => {
    request(app)
      .post('/signUp')
      .send({ name: 'saleem', email: 'saleem200000@gmail.com', password: '123456789' })
      .expect(302)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});
describe(' POST /login', () => {
  test('responds with cookie', (done) => {
    request(app)
      .post('/login')
      .send({ email: 'saleem200000@gmail.com', password: '123456789' })
      .expect(302)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});
