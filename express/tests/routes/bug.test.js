const request = require('supertest');
const bugModel = require('../../src/models/bugModel');
const app = require('../../app'); 

// Mocking the userModel.findById function
jest.mock('../../src/models/bugModel');

describe('Bug Route', () => {
  it('should fetch a bug by ID', async () => {
    const mockBug = { bug_id: '123', title: 'Login Bug' };

    // Mock implementation
    bugModel.findById.mockResolvedValue(mockBug);

    const res = await request(app).get('/bugs/123');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('title', 'Login Bug');
  });
});
