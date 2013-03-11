define([

    'angular_js',

    // controllers
    '/modules/main/games/games-item.js',
    '/modules/main/games/games-list.js',
    '/modules/main/home/home-page.js'

], function(games_item, games_list, main_page) {
    'use strict';

    var main = angular.module('main', []);

    main.config([ '$routeProvider', function($routeProvider) {
        $routeProvider

            .when('/home', {
                templateUrl: '/modules/main/home/home-page.html',
                controller: games_item
            })

            .when('/games', {
                templateUrl: '/modules/main/games/games-list.html',
                controller: games_list
            })

            .when('/games/:gameId', {
                templateUrl: '/modules/main/games/games-item.html',
                controller: main_page
            })

    } ]);

    return main;
});