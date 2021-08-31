const request = require('supertest');
const app = require('../server/app');

const connection = require('../server/database/connection');
const dbBuild = require('../server/database/data/build');
const {
  signUpQuery,
  loginQuery,
  addPost,
  deletePost,
  addComment,
  deleteComment,
  getComment,
  updateComment,
  getUser,
} = require('../server/database/queries');

beforeEach(() => dbBuild());

test('test signUpQuery & loginQuery  query', () => {
  signUpQuery('Salama55', '456085$$%', 'salama55@gmail.com').then(({ rows }) => {
    expect(rows[0].name).toBe('Salama55');
    loginQuery('salama55@gmail.com').then(({ rows }) => {
      expect(rows[0].name).toBe('Salama55');
    });
  });
});

test('test addPost query', () => {
  addPost('Good Morning', 'Hello People', 1, 'f').then(({ rows }) => {
    expect(rows[0].title).toBe('Good Morning');
    expect(rows[0].content).toBe('Hello People');
  });
});

afterAll(() => connection.end());
