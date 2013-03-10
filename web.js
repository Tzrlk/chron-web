'use strict';

var path = './app' || process.env.CONTEXT;
var port = 8000 || process.env.PORT;

var server = new (require('node-static').Server)(path);

require('http')
  
  .createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    });
  })
  
  .listen(port);
