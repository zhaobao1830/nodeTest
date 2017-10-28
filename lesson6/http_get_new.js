var http = require('http');
var fs = require('fs');
http.get('http://101.200.129.112:4567/users/latest', function(response){
  // console.log(response);
  response.setEncoding('utf8')
  response.on('data', function(data){
    console.log(data);
    // 将网站响应数据写入文件
    // fs.appendFile('baidu.html', data)
  })
}).on('error', function(e){
  console.log(e.message);
})