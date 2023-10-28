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

  it('should create a new bug', async () => {
    const newBugData = {
      title: 'Users Mapping Issue',
      description: 'Users get lost without a map',
      status: 'New',
      severity: 'Low',
      type: 'Functional Bug',
      project_id: 1,
      reported_by: 1
    };

    const mockCreatedBug = {
      bug_id: 456,
      ...newBugData,
      date_reported: new Date().toISOString(),
      last_modified: new Date().toISOString()
    };

    bugModel.create.mockResolvedValue(mockCreatedBug);

    const res = await request(app)
      .post('/bugs')
      .send(newBugData);
    console.log(res.body);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('bug_id', 456);
    expect(res.body).toHaveProperty('title', 'Users Mapping Issue');
  });
});