var express = require('express');
var app = express();

//Ao usar o require ele procura o arquivo routes.js se não achar procura um diretorio chamado routes com um arquivo index.js
app.use('/', require('./routes')(app));


app.use(function (resquest, response, next) {
  response.send('Erro 1');
});

app.use(function (err,resquest, response, next) {
  console.log(err);
  response.send('Erro');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});