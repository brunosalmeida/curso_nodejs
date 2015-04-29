var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.json({'nome':'Curso de NodeJS na Novatec'});
});

app.get('/products', function (req, res) {
  res.send('Listando todos os produtos');
});

app.post('/products', function (req, res) {
  res.send('Criando um novo produto');
});

app.get('/products/:id', function (req, res) {
  var id = req.params.id;		
  var category = req.query.category;

  res.send('Devolvo um produto específico: ' + id + ' category:' + category + '!');
});

app.put('/products/:id', function (req, res) {
  res.send('Atualizando o produto desse ID');
});

app.delete('/products/:id', function (req, res) {
  res.send('Excluindo o produto desse ID');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});