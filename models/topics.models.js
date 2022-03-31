const db = require("../db/connection");

exports.pullTopics = () => {
    return db.query("SELECT * FROM topics;")
    .then((result)=>{
        return result.rows;
    })
    .catch((err) => {
        throw new Error(err);
    });
  };

  exports.pullArticleById = (id) => {
      return db.query("SELECT * FROM articles WHERE article_id = $1;", [id])
      .then((result) => {
          return result.rows;
      })
      .catch((err) => {
          throw new Error(err);
      });
  };

  exports.updateArticleById = (id, patchDetails) => {
      return db.query("UPDATE articles SET votes = votes + $1 WHERE article_id = $2 RETURNING *;", [patchDetails.inc_votes, id])
      .then((result) => {
          return result.rows;
      })
      .catch((err) => {
          throw new Error(err);
      });
  }