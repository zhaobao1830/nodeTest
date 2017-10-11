var fs = require('fs');
var querystring = require('querystring');

function start(response){
  console.log("Request handler 'start' was called.");
  var body = fs.readFileSync('./post.html');

  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(body);
  response.end();
}

function upload(response, postData){
  console.log("Request handler 'upload' was called.");
  console.log(querystring.parse(postData));
  response.writeHead(200, {'Content-Type': 'text/plain', 'name': 'dongnaoedu.com'});
  response.write("Hello " + querystring.parse(postData).name);
  response.write("Your email is: " + querystring.parse(postData).email);
  response.end();
}

exports.start = start;
exports.upload = upload;
