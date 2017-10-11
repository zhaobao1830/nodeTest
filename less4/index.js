var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handel = {}
handel["/"] = requestHandlers.start;
handel["/start"] = requestHandlers.start;
handel["/upload"] = requestHandlers.upload;
handel["/show"] = requestHandlers.show;

server.start(router.route, handel);