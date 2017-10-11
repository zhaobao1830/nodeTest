var http = require('http');
function onRequest(request, response) {
  console.log('Request received');
  response.writeHeader(200, {'Content-Type': 'text/plain'});
  response.write('hello word');
  response.end();
}
http.createServer(onRequest).listen(8888);
