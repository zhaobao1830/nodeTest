var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var iconv = require('iconv-lite');

// request('http://wodeshucheng.com/book_15389/4334639.html', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage.
//     fs.appendFile('wodeshucheng.html', body);
//   }
// })
var url = 'http://wodeshucheng.com/book_15389/4334639.html';
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
      var content = $('div#htmlContent').text();
      var urlPrev = $('a#pager_prev').attr('href');
      console.log(urlPrev)
      fs.appendFile('wodeshucheng.txt', content);
      getcontent(urlPrev);
    }
  })
}

getcontent(url);
