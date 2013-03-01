run([

    'angular_js',
    'bootstrap_js',
    'bootstrap_css',

    'modules/actions/module-actions.js',
    'modules/forum/module-forum.js',
    'modules/main/module-main.js',
    'modules/wiki/module-wiki.js'

], function(SC) {
    'use strict';

    SC.app = angular.module('app', [ 'actions', 'forum', 'main', 'wiki', 'ui' ]);

    SC.app.config([ '$routeProvider', function($routeProvider) {

        // When in doubt, redirect home.
        $routeProvider.otherwise({ redirectTo: '/home' });

    } ]);
});