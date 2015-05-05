/*configuração da aplicação*/
var express = require('express');
var app = express();
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

//Módulo para que o nodejs entenda o cabeçalho de input para PUT e DELETE.
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));

//Módulo para o nodejs conseguir converter a requisição em json.
app.use(bodyParser.json());
//Módulo para o nodejs conseguir converter os filhos em json também.
app.use(bodyParser.urlencoded({ extended: true}));





/*Configuração de Rotas*/
//Ao usar o require ele procura o arquivo routes.js se não achar procura um diretorio chamado routes com um arquivo index.js
app.use('/', require('./routes')(app));


/*Configuração de Erros*/
app.use(function (resquest, response, next) {
  response.send('Erro 1');
});

app.use(function (err,resquest, response, next) {
  console.log(err);
  response.send('Erro');
});


/*Configuração do servidor*/
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

module.exports = app;