define(['./module'], function (controllers) {
	'use strict';
	controllers.controller('User', function ($scope, $http) {
		$http.get('/user').success(function(data) {
			$scope.users = data;
		});
	});
});