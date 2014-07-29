var path     = require('path');
var express  = require('express');
var settings = require('./settings');
var models   = require('../app/models/');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static')

module.exports = function (app) {
  app.use(serveStatic(path.join(settings.path, 'public')));
  app.use(bodyParser.json());
  app.use(function (req, res, next) {
    models(function (err, db) {
      if (err) return next(err);

      req.models = db.models;
      req.db     = db;

      return next();
    });
  });
};
