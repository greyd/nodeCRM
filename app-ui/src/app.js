define([
	'angular',
	'./controllers/index',
	'./directives/index',
	'./filters/index',
	'./services/index'
], function (angular) {
	'use strict';

	return angular.module('app', [
		//'app.services',
		'app.controllers',
		//'app.filters',
		//'app.directives'
	]);
});