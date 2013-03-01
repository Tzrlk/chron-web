run([
], function(SC) {
    'use strict';

    var forum = angular.module('forum', []);

    forum.config([ '$routeProvider', function($routeProvider) {
        var controllers = SC.ensure('controllers');

        $routeProvider

            .when('/forum', {
//                templateUrl: 'modules/main/home/main-page.html',
//                controller: SC.controllers.CoreMainPageController
            })

            .when('/forum/:topicId', {
//                templateUrl: 'modules/main/home/main-page.html',
//                controller: SC.controllers.CoreMainPageController
            })

            .when('/games/:gameId/forum', {
//                templateUrl: 'modules/main/home/main-page.html',
//                controller: SC.controllers.CoreMainPageController
            })

            .when('/games/:gameId/forum/:topicId', {
//                templateUrl: 'modules/main/home/main-page.html',
//                controller: SC.controllers.CoreMainPageController
            })

    } ]);

    SC.ensure('modules').forum = forum;
});