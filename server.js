var path        = require('path');
var express     = require('express');
var colors      = require('colors')
var settings    = require('./config/settings');
var environment = require('./config/environment');
var routes     = require('./config/routes');

var app = express();

environment(app);
routes(app);

app.listen(settings.port, function () {
	console.log( ("Listening on port " + settings.port).green );
});
