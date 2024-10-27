const request = require('supertest');
const app = require('../../server'); // If server.js is in the project root

describe('Auth Routes', () => {
  it('should register a new user', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({ username: 'testuser', email: 'test@example.com', password: 'password123' });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('email', 'test@example.com');
  });

  it('should return 401 for invalid login', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({ username: 'invaliduser', password: 'wrongpassword' });

    expect(response.statusCode).toBe(401);
    expect(response.body).toHaveProperty('message', 'Invalid credentials');
  });
});
