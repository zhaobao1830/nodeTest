var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var iconv = require('iconv-lite');
var mongoose = require('mongoose');

// 连接数据库
mongoose.connect('mongodb://localhost/shu');
//注册Schema
var Schema = mongoose.Schema;
var textSchema = new Schema({
  content:String
})
var Text = mongoose.model('Text', textSchema);
var url = 'http://162.252.9.10/forum/thread-10050020-1-1.html';
function myRequest(url, callback){
  var options = {
    url: url,
    encoding: null
  }
  request(options, callback)
}

function getcontent(url){
  myRequest(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var html = iconv.decode(body, 'gb2312')
      // console.log(html) // Show the HTML for the Google homepage.
      var $ = cheerio.load(html);
      var content = $('div#postmessage_103460501').text();
      var text = new Text();
      text.content = content;
      text.save(function (err) {
        if(err){
          console.log(err);
          return;
        } else {
          console.log('Successfully, saved to MongoDB.')
        }
      })
      fs.appendFile('wodeshucheng.txt', content);
    }
  })
}

getcontent(url);
