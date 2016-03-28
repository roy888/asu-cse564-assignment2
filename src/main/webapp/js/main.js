/*global require*/
'use strict';

// Require.js allows us to configure shortcut alias
require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
	shim: {
		underscore: {
			exports: '_'
		},
                bootstrap: {
                    deps: ["jquery"]
                },
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		}
	},
	paths: {
		jquery: '../lib/jquery-2.2.2.min',
		underscore: '../lib/underscore-min',
		backbone: '../lib/backbone-min',
                text: '../lib/text',
                bootstrap: '../lib/bootstrap.min'
	}
});

require([
	'backbone'
], function (Backbone) {
	/*jshint nonew:false*/
	// Initialize routing and start Backbone.history()
	Backbone.history.start();
});
