var http = require('http');
var url = require('url');

function start(route, handle){

  function onRequest(request, response){
    var pathname = url.parse(request.url).pathname;
    if(pathname === '/favicon.ico'){

    }else{
      console.log("Request for " + pathname + " received.");
      var postData = "";
      request.setEncoding("utf8");
      request.addListener("data", function(posDataChunk){
        postData += posDataChunk;
        console.log("Receive POST data chunk" + posDataChunk);
      });
      request.addListener("end", function() {
          route(handle, pathname, response, postData);
      })
    }
  }

  http.createServer(onRequest).listen(8080, function(){
    console.log('Server is starting on port 8080.')
  })
}

exports.start = start;
