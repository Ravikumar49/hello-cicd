const request = require('supertest');
const app = require('./app');

describe('API Endpoints', () => {
  // Test the root endpoint
  test('GET / returns welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello from the CI/CD pipeline!');
  });

  // Test the health check endpoint
  test('GET /health returns status ok', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    const healthResponse = await request(app).get('/health');
    expect(healthResponse.status).toBe(200);
    expect(healthResponse.body.status).toBe('ok');
  });
});