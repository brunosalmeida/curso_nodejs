var db = require('../db/mongo');	

//função construtora para poder criar os prototypes
function ProductsController(){
	
}

ProductsController.prototype.findAll = function(request, response, next){
	
	//através do objeto db acessa a collection users e seleciona todos.
	db.collection('products').find({}, function(error, result){
		
		if (error) {
			return response.json(error);
		}	

		response.json(result);
	});		
};

ProductsController.prototype.create = function(request, response, next){
	//Ver pagina 15 da apostila.
	var body = request.body;

	//através do objeto db acessa a collection users e salva um novo user.
	db.collection('products').save(body, function(error, result){
		
		if (error) {
			return response.json(error);
		}

		response.json(result);
	});
};

ProductsController.prototype.findOne = function(request, response, next){
	
	//recupera o id enviado na url.
	var _id = db.ObjectId(request.params.id);

	//através do objeto db acessa a collection users e produra um user pelo id.
	db.collection('products').findOne({_id: _id}, function(error, result){
		
		if (error) {
			return response.json(error);
		}

		response.json(result);
	});	
};

ProductsController.prototype.update = function(request, response, next){

	var body = request.body;
	var _id = request.params.id;
	db.collection('products').update({ _id: _id},body, function(error, result){
		
		if (error) {
			return response.json(error);
		}

		response.json(result);
	});
};

ProductsController.prototype.delete = function(request, response, next){
	
	db.collection('products').remove({_id: _id}, function(error, result){
		
		if (error) {
			return response.json(error);
		}

		response.json(result);
	});	
};

module.exports = new ProductsController();

