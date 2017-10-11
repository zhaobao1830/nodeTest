var exec = require('child_process').exec;

function start(response){
  console.log("Request handler 'start' was called.");
  // function sleep(milliSeconds){
  //   var startTime = new Date().getTime();
  //   while(new Date().getTime() < startTime+ milliSeconds);
  // }
  // sleep(10000);
  var content = "empty";
  exec('tree c:/',{encoding: 'Song',timeout: 10000, maxBuffer:20000*1024}, function(error, stdout, stderr){
    if(error){
      console.log(error)
    }else{
      content = stdout || stderr;
      console.log(content);
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.write(content);
      response.end();
    }
  });
}
function upload(response){
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write("Hello Upload.");
  response.end();
}

exports.start = start;
exports.upload = upload;
