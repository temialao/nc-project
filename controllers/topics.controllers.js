const { topicData } = require("../db/data/development-data");
const { pullTopics } = require("../models/topics.models");

exports.getTopics = (req, res) => {
  pullTopics().then((topics) => {
      res.status(200).send({ topics: topics });
  })
  .catch((err) => {
    throw new Error(err)
  });
};