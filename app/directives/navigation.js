run([

    'angular_js',
    'bootstrap_js',
    'bootstrap_css'

], function(SC) {
    'use strict';

    var templateUrl = 'directives/navigation.html';

    SC.app.directive('navigation', [ 'utils', function(utils) {
        return {
            restrict: 'E',
            scope: {},
            link: function(scope, element, attrs) {
                utils.templateSwap(scope, element, templateUrl);
            },
            controller: [ '$scope', function($scope) {
                //
            } ]
        }

    } ]);
});