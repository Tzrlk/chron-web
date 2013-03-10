(function(SC) {
    'use strict';

    var resources = {
        angular_js: '//ajax.googleapis.com/ajax/libs/angularjs/1.0.1/angular.min.js',
        bootstrap_css: '//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/css/bootstrap-responsive.min.css',
        bootstrap_js: '//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/css/bootstrap-combined.no-icons.min.css'
    };

    /**
     * This function sets up the namespace and requirements for whatever piece of code needs to be run.
     * @param {Array} requirements The list of resource requirements.
     * @param {function()} callback What code to execute when it's all ready.
     */
    function run(requirements, callback) {
        var args = translate(requirements);

        // add on the callback function.
        args.push(function() {
            callback.call(SC, SC);
        });

        // load everything.
        window.head.js.apply(null, args);
    }

    /**
     * Turns a list of resource names into URIs.
     * @param {Array} resourceList The list of resources to translate.
     * @return {Array} The resolved list of resource URIs.
     */
    function translate(resourceList) {
        var translated = [];

        for (var i = 0, l = resourceList.length; i < l; i++) {
            var resource = resourceList[i];
            var translation = resources[resource];

            translated.push(translation ? translation : resource);
        }

        return translated;
    }

    /**
     * A simple function to make sure that a particular sub-object of SC exists.
     * @param {String} name The name of the object to get.
     * @return {Object} The requested object.
     */
    function ensure(name) {
        return SC[name] || (SC[name] = {});
    }

    // Expose some functions.
    SC.ensure = ensure;

    // This must be exposed to the window.
    window.run = run;

})(window.SC || (window.SC = {}));