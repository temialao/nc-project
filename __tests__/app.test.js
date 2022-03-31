const request = require('supertest');
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

describe('GET /api/articles/:article_id', () => {
    test('responds with status: 200 and article object with correct properties', () => {
        return request(app)
        .get('/api/articles/5')
        .expect(200)
        .then((response) => {
            const article = response.body;
            console.log(article)
            expect(typeof article).toBe('object')
        })
    });
});