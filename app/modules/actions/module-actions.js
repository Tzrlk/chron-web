run([

    'angular_js'

], function(SC) {
    'use strict';

    var actions = angular.module('actions', []);

    actions.config([ '$routeProvider', function($routeProvider) {
        var controllers = SC.ensure('controllers');

        $routeProvider

            .when('/games/:gameId/actions', {
//                templateUrl: 'modules/main/home/main-page.html',
//                controller: SC.controllers.CoreMainPageController
            })

            .when('/games/:gameId/actions/:actionId', {
//                templateUrl: 'modules/main/home/main-page.html',
//                controller: SC.controllers.CoreMainPageController
            })

    } ]);

    SC.ensure('modules').actions = actions;
});