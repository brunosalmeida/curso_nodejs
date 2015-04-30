//instancia modulo que conversa com o mongodb
var mongojs = require('mongojs');

//configura qual base de dados será utilizada
var db = mongojs('localhost/vitrine');

//função construtora para poder criar os prototypes
function ProductsController(){
	
};

ProductsController.prototype.findAll = function(request, response, next){
	//através do objeto db acessa a collection users e seleciona todos.
	db.collection('users').find({}, function(error, result){
		response.json(result);
	});		
};

ProductsController.prototype.create = function(request, response, next){
	//Ver pagina 15 da apostila.
	var body = request.body;

	//através do objeto db acessa a collection users e salva um novo user.
	db.collection('users').save({name: "Aluno Novatech"}, function(error, result){
		response.json(result);
	});
};

ProductsController.prototype.findOne = function(request, response, next){
	
	//recupera o id enviado na url.
	var _id = mongojs.ObjectId(request.params.id);

	//através do objeto db acessa a collection users e produra um user pelo id.
	db.collection('users').findOne({_id: _id}, function(error, result){
		response.json(result);
	});	
};

ProductsController.prototype.update = function(request, response, next){


	db.collection('users').update({_id: _id},{name: "Aluno Novatech"}, function(error, result){
		response.json(result);
	});
};

ProductsController.prototype.delete = function(request, response, next){
	db.collection('users').remove({_id: _id}, function(error, result){
		response.json(result);
	});	
};

module.exports = new ProductsController();

