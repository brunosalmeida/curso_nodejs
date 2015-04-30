module.exports = function(app){
	var express = require('express');
	var router = express.Router();

	//cria rota raiz para a aplicação.
	router.get('/', function(request, response, next){
		response.send("Bruno Almeida - Home");
	});

	//caso a url digitada não for a raiz mas sim products "importar/carregar" arquivo de rotas de products. 
	app.use('/products', require('./products'));

	return router;
};