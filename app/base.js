(function(SC) {
    'use strict';

    var resources = {
    };

    /**
     * This function sets up the namespace and requirements for whatever piece of code needs to be run.
     * @param {Array} requirements The list of resource requirements.
     * @param {function()} callback What code to execute when it's all ready.
     */
    function run(requirements, callback) {
        var args = translate(requirements);

        require(args, function() {
            callback.call(SC, SC);
        });
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