var http = require('http');
var fs = require('fs');
var cheerio = require('cheerio');

http.get('http://101.200.129.112:4567/users/latest', function(response){
  // console.log(response);
  var html = '';
  response.setEncoding('utf8');
  response.on('data', function(data){
    // console.log(data);
    html += data;
    // 将网站响应数据写入文件
    // fs.appendFile('dongnaoforum.html', data)
  });
  response.on('end', function(){
    // 页面内容获取完成，解析页面
    var $ = cheerio.lsoad(html);
    $('div.user-info a').each(function(){
      var href = this.attribs.href;
      var name = href.substr(6, href.length);
      console.log(name);
    })
  })
}).on('error', function(e){
  console.log(e.message);
})
