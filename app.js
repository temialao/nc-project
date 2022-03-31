const express = require('express');

const { getTopics, getArticleById, patchArticleById } = require('./controllers/topics.controllers.js');

const app = express();

app.use(express.json());

app.get('/api/topics', getTopics);

app.get('/api/articles/:article_id', getArticleById);

app.patch('/api/articles/:article_id', patchArticleById);

module.exports = app;