var http = require('http');
var querystring = require('querystring');
var postData = querystring.stringify({
  name: "Song",
  email: "2060884089@qq.com"
});
var options = {
  hostname: "127.0.0.1",
  port: 8080,
  path: '/upload',
  method: 'POST',
  headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData)
  }
}
var request = http.request(options, function(response){
  console.log(`STATUS: ${response.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(response.headers)}`);
  response.setEncoding('utf8');
  response.on('data', function(data){
    console.log(data)
  });
  response.on('end', function(){
    console.log('no more data.')
  })
})

request.write(postData);
request.end();
