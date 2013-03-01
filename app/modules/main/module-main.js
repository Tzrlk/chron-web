run([

    'modules/main/home/main-page.js',
    'modules/main/games/games-list.js',
    'modules/main/games/games-item.js'

], function(SC) {
    'use strict';

    var main = angular.module('main', []);

    main.config([ '$routeProvider', function($routeProvider) {
        var controllers = SC.ensure('controllers');

        $routeProvider

            .when('/home', {
                templateUrl: 'modules/main/home/main-page.html',
                controller: controllers.CoreMainPageController
            })

            .when('/games', {
                templateUrl: 'modules/main/games/games-list.html',
                controller: controllers.CoreGamesListController
            })

            .when('/games/:gameId', {
                templateUrl: 'modules/main/games/games-item.html',
                controller: controllers.CoreGamesItemController
            })

    } ]);

    SC.ensure('modules').main = main;
});