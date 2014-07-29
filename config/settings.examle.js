var path       = require('path');

var settings = {
  path       : path.normalize(path.join(__dirname, '..')),
  port       : process.env.NODE_PORT || 8000,
  database   : {
    protocol : "mysql", // or "mysql"
    query    : { pool: true },
    host     : "db-host",
    database : "db-name",
    user     : "db-user",
    password : "db-password"
  }
};

module.exports = settings;
