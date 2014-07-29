var controllers = require('../app/controllers');
module.exports = function (app) {
  app.use('/user', controllers.user);
};
