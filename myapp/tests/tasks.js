const request = require('supertest');
const app = require('../app'); 

describe('POST /tasks', () => {
    it('should create a new task', async () => {
        const res = await request(app)
            .post('/tasks')
            .send({
                title: 'Test Task',
                description: 'Test Description',
                status: 'pending',
                assignee_id: 1
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('id');
    });
});