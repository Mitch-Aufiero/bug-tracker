const request = require('supertest');
const projectModel = require('../../src/models/projectModel');
const app = require('../../app'); 

// Mocking the userModel.findById function
jest.mock('../../src/models/projectModel');

describe('Project Route', () => {
  it('should fetch a project by ID', async () => {
    const mockProj = { project_id: '123', name: 'Project 7D2D', description: 'seven day to develop'};

    // Mock implementation
    projectModel.findById.mockResolvedValue(mockProj);

    const res = await request(app).get('/projects/123');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name', 'Project 7D2D');
    expect(res.body).toHaveProperty('description', 'seven day to develop');
  });

});