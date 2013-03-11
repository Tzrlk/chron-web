define([

    // external requirements
    'angular_js',

    // application modules
    '/modules/actions/module-actions.js',
    '/modules/forum/module-forum.js',
    '/modules/main/module-main.js',
    '/modules/wiki/module-wiki.js'

], function(actions, forum, main, wiki) {
    'use strict';

    var app = angular.module('app', [ 'actions', 'forum', 'main', 'wiki', 'ui' ]);

    app.config([ '$routeProvider', function($routeProvider) {

        // When in doubt, redirect home.
        $routeProvider.otherwise({ redirectTo: '/home' });

    } ]);

    return app;
});