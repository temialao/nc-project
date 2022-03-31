const { pullTopics, pullArticleById, updateArticleById } = require("../models/topics.models");

exports.getTopics = (req, res) => {
  pullTopics().then((topics) => {
      res.status(200).send({ topics: topics });
  })
  .catch((err) => {
    throw new Error(err)
  });
}; 

exports.getArticleById = (req, res) => {
    const id = req.params.article_id;
    pullArticleById(id).then((article) => {
        res.status(200).send({article})
    })
    .catch((err) => {
        throw new Error(err)
    });
};

exports.patchArticleById = (req, res) => {
    const id = req.params.article_id;
    updateArticleById(id, req.body).then((article) => {
        res.status(200).send({article})
    })
    .catch((err) => {
        throw new Error(err)
    });
};