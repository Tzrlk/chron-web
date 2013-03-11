define([

    'angular_js'

], function() {
    'use strict';

    var wiki = angular.module('wiki', []);

    wiki.config([ '$routeProvider', function($routeProvider) {
        $routeProvider

            .when('/games/:gameId/wiki', {
//                templateUrl: 'modules/main/home/home-page.html',
//                controller: SC.controllers.CoreMainPageController
            })

            .when('/games/:gameId/wiki/:articleId', {
//                templateUrl: 'modules/main/home/home-page.html',
//                controller: SC.controllers.CoreMainPageController
            })

    } ]);

    return wiki;
});