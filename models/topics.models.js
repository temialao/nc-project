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

