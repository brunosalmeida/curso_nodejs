//carrega a model 
var model = require('../models/ProductsModel');
//carrega o modulo para debugar
var debug = require('debug')('vitrine:controller');
//carrega o modulo do bluebird que é responsavel por criar os metodos Async do model.
var Promise = require('bluebird');

//função construtora para poder criar os prototypes
function ProductsController(){
	//cria uma cópia assíncrona em memória dos métodos da model. Todos os métodos recebem a palavra Async no nome do método.
	model = Promise.promisifyAll(model);
}

ProductsController.prototype.findAll = function(request, response, next){
	
	//através do objeto model acessa a collection products e seleciona todos.
	model.findAsync({}).then(function(result){
		response.json(result);
	})
	.catch(next);			
};

ProductsController.prototype.create = function(request, response, next){
	//recupera o body da requisisão ou seja os outro parametros do meu 'objeto'.
	var body = request.body;

	//através do objeto db acessa a collection users e salva um novo user.
	model.createAsync(body).then(function(result){
		response.json(result);
	})
	.catch(next);	
};

ProductsController.prototype.findOne = function(request, response, next){
	
	//recupera o id enviado na url.
	var _id = request.params.id;

	//através do objeto model acessa a collection users e produra um user pelo id.
	model.findOneAsync(_id).then(function(result){
		response.json(result);
	})
	.catch(next);	
};

ProductsController.prototype.update = function(request, response, next){

	var body = request.body;	
	var _id =  request.params.id;

	model.updateAsync(_id, body).then(function(result){
		response.json(result);
	})
	.catch(next);	
};

ProductsController.prototype.delete = function(request, response, next){
	
	var _id =  request.params.id;

	model.deleteAsync(_id).then(function(result){
		response.json(result);
	})
	.catch(next);	
};

module.exports = new ProductsController();

