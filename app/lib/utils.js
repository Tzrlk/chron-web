define([

    'angular_js'

], function(SC) {
    'use strict';

    return angular.factory('utils', [ '$compile', function($compile) {
        var templates = {};

        function template(templateUrl) {
            var template = templates[templateUrl];

            if (template) {
                return template;
            }

            $.ajax(templateUrl, {
                async: false,
                dataType: 'html',
                success: function(data) {
                    template = data; //_.str.trim(data);
                    templates[templateUrl] = template;
                }
            });

            return template;
        }

        function templateSwap(scope, element, templateUrl) {
            var html = template(templateUrl);
            element.html(html);
            $compile(element.contents())(scope);
        }

        return {
            template: template,
            templateSwap: templateSwap
        }
    } ]);

});