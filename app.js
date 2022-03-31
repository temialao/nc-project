const express = require('express');

const { getTopics, getArticleById } = require('./controllers/topics.controllers.js');

const app = express();

app.use(express.json());

app.get('/api/topics', getTopics);

app.get('/api/articles/:article_id', getArticleById);

module.exports = app;