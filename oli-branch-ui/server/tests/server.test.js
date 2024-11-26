const request = require('supertest');
const app = require('../../server'); // If server.js is in the project root

describe('Server', () => {
  it('should respond to the /api/test-db route', async () => {
    const response = await request(app).get('/api/test-db');
    expect(response.statusCode).toBe(200);
  });

  it('should return 404 for unknown routes', async () => {
    const response = await request(app).get('/api/unknown');
    expect(response.statusCode).toBe(404);
  });
});
