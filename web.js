'use strict';

// initialise the context and port vars
var path = './app' || process.env.CONTEXT;
var port = 8000 || process.env.PORT;

// initialise the required modules
var http = require('http'),
    stat = require('node-static');

// setup the file server
var fileServer = new (stat.Server)(path);

// define the callback for the http server
function serveFile(request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    });
}

// setup the http server with the provided callback
var httpServer = http.createServer(serveFile);

// run the http server on the configured port.
httpServer.listen(port);