module.exports = function(app){
	var express = require('express');
	var router = express.Router();

	//cria rota raiz para a aplicação.
	router.get('/', function(request, response, next){
		response.render('index', {
		  products: [
				{name: 'Livro Mongodb', price:19.90},
				{name: 'Livro Scala', price:19.90},
				{name: 'Livro C#', price:19.90}
		  ]
		});
	});

	//caso a url digitada não for a raiz mas sim products "importar/carregar" arquivo de rotas de products. 
	app.use('/products', require('./products'));

	return router;
};