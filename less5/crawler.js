var http = require('http');
var fs = require('fs');
http.get('http://162.252.9.10/forum/thread-9998377-1-1.html', function (response) {
  response.setEncoding('utf8');
  response.on('data', function (data) {
    console.log(data);
    fs.appendFile("test.html", data);
  })
    .on('error', function (e) {
      console.log(e.message)
    })
})