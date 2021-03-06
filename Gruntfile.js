module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
		watch: {
			options: {livereload: true},
			js: {files: ['app-ui/src/**/*.js']},
			css: {files: ['app-ui/styles/less/*.less']},
			html: {files: ['app-ui/**/*.html']}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
}
