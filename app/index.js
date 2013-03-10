require([
    'modules/actions/module-actions',
    'modules/forum/module-forum',
    'modules/main/module-main',
    'modules/wiki/module-wiki'
], function() {
    'use strict';

    SC.app = angular.module('app', [ 'actions', 'forum', 'main', 'wiki', 'ui' ]);

    SC.app.config([ '$routeProvider', function($routeProvider) {

        // When in doubt, redirect home.
        $routeProvider.otherwise({ redirectTo: '/home' });

    } ]);
});