'use strict';

// initialise the context and port vars
var path = process.env.CONTEXT || './app';
var port = process.env.PORT || 8000;

// initialise the required modules
var http = require('http'),
    stat = require('node-static');

// setup the file server
var fileServer = new stat.Server(path);

// define the callback for the http server
function serveFile(request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response, function(err, result) {
            if (err) {
                console.log("Error serving " + request.url + " - " + err.message);

                // Respond to the client
                response.writeHead(err.status, err.headers);
                response.end();
            }
        });
    });
}

// setup the http server with the provided callback
var httpServer = http.createServer(serveFile);

// run the http server on the configured port.
httpServer.listen(port);