define([

    'angular_js'

], function() {
    'use strict';

    var forum = angular.module('forum', []);

    forum.config([ '$routeProvider', function($routeProvider) {
        $routeProvider

            .when('/forum', {
//                templateUrl: 'modules/main/home/home-page.html',
//                controller: SC.controllers.CoreMainPageController
            })

            .when('/forum/:topicId', {
//                templateUrl: 'modules/main/home/home-page.html',
//                controller: SC.controllers.CoreMainPageController
            })

            .when('/games/:gameId/forum', {
//                templateUrl: 'modules/main/home/home-page.html',
//                controller: SC.controllers.CoreMainPageController
            })

            .when('/games/:gameId/forum/:topicId', {
//                templateUrl: 'modules/main/home/home-page.html',
//                controller: SC.controllers.CoreMainPageController
            })

    } ]);

    return forum;
});