var fs = require('fs'),
    querystring = require("querystring"),
    formidable = require("formidable");

function start(response, postData) {
  console.log('Request start');
  var body = fs.readFileSync('./post.html');
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(body);
  response.end();
}
function upload(response, request) {
  // console.log('Request upload');
  // response.writeHead(200, {"Content-Type": "text/plain"});
  // response.write("You have sent the text: " + querystring.parse(postData).text);
  // response.end();
  console.log('Request upload');
  var form = new formidable.IncomingForm();
  form.uploadDir = 'public/upload';
  console.log("about to parse");
  form.parse(request, function (error, fields, files) {
    console.log("parsing done");
    fs.renameSync(files.MyFile.path, "tmp/test.png");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write('recceived image: <br/>');
    response.write('<img src="/show">');
    response.end();
  })
}

function show(response, postData) {
  console.log("Request handel show")
  fs.readFile("tmp/test.png", function (error, file) {
    if (error) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.write(file, "binary");
      response.end();
    }
  })
}
exports.start = start;
exports.upload = upload;
exports.show = show;