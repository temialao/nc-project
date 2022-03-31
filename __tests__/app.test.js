const request = require('supertest');
// const { request } = require('express');
const testData = require('../db/data/test-data');
const seed = require('../db/seeds/seed');
const app = require('../app')
const db = require('../db/connection');

afterAll(() => db.end());
beforeEach(() => seed(testData));

describe('GET /api/topics', () => {
    test('responds with status: 200 and array of topic objects', () => {
        return request(app)
        .get('/api/topics')
        .expect(200)
        .then(({body}) => {
            const { topics } = body;
            console.log(topics);
            expect(Array.isArray(topics)).toBe(true);
            expect(topics).toHaveLength(3);
            topics.forEach((topic) => {
                expect(topic).toEqual(
                    expect.objectContaining({
                        slug: expect.any(String),
                        description: expect.any(String)
                    })
                );
            });
        });
    });
});
