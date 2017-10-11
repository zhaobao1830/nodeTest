// li.users-box:nth-child(14) > a:nth-child(1)
//
// div.users>ul#users-container>li>a

var items = document.querySelectorAll('div.users>ul>li>a');
for(var i = 0; i < items.length; i++){
  // console.log(items[i].getAttribute('href'));
  var href = items[i].getAttribute('href');
  var name = href.substr(6, href.length);
  var nameyao = href.split('/').pop();
  var namehuang = href.replace("/user/","")
  console.log(namehuang);
}
