(function() {
    'use strict';

    require.config({
        map: {
            '*': {
                'css': '//raw.github.com/guybedford/require-css/master/css.js',
                'less': '//raw.github.com/guybedford/require-less/master/less.js'
            }
        },
        paths: {
            'angular_js': '//ajax.googleapis.com/ajax/libs/angularjs/1.0.1/angular.min.js',
            'bootstrap_js': '//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/js/bootstrap.min.js',
            'bootstrap_css': '//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/css/bootstrap-combined.min.css'
        }
    });

    require([

        '/index.js',

        'angular_js',
        'bootstrap_js',
        'css!bootstrap_css'

    ], function(app) {
        console.log('Application loaded!');
    });

});