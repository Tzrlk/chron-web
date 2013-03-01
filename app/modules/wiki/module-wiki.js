run([
], function(SC) {
    'use strict';

    var wiki = angular.module('wiki', []);

    wiki.config([ '$routeProvider', function($routeProvider) {
        var controllers = SC.ensure('controllers');

        $routeProvider

            .when('/games/:gameId/wiki', {
//                templateUrl: 'modules/main/home/main-page.html',
//                controller: SC.controllers.CoreMainPageController
            })

            .when('/games/:gameId/wiki/:articleId', {
//                templateUrl: 'modules/main/home/main-page.html',
//                controller: SC.controllers.CoreMainPageController
            })

    } ]);

    SC.ensure('modules').wiki = wiki;
});