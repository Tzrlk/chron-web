define([

    'angular_js'

], function(SC) {
    'use strict';

    var actions = angular.module('actions', []);

    actions.config([ '$routeProvider', function($routeProvider) {
        $routeProvider

            .when('/games/:gameId/actions', {
//                templateUrl: 'modules/main/home/home-page.html',
//                controller: SC.controllers.CoreMainPageController
            })

            .when('/games/:gameId/actions/:actionId', {
//                templateUrl: 'modules/main/home/home-page.html',
//                controller: SC.controllers.CoreMainPageController
            })

    } ]);

    return actions;
});