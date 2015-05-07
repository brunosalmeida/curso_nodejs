//carrega a conexão com mongo na variavel db.
var db = require('../db/mongo');

//variavel para debugar o módulo debug
var debug = require('debug')('vitrine:model');

var source = 'products'

//contrutor de ProcductModel
function ProductsModel(){

};


ProductsModel.prototype.find = function(query, callback){
	//realiza o find de fato no mongo recebendo os parametros query(query vazia) e callback
	db.collection(source).find(query, callback);
};

ProductsModel.prototype.create = function(data, callback){
	//realiza o insert do product
	db.collection(source).save(data, function (err, erro1, erro2){
		callback(err, erro1);
	});
};

ProductsModel.prototype.findOne = function(id, callback){

	//recupera o id e converte em id que o mongo entende.
	var _id = db.ObjectId(id);
	//procura o product com o _id informado.
	db.collection(source).findOne({_id: _id}, callback);
};

ProductsModel.prototype.update = function(id, data, callback){
	//recupera o id e converte em id que o mongo entende.
	var _id = db.ObjectId(id);
	//atualiza o product passando o id recuperado e o body com o name atualizado.
	db.collection(source).update({_id: _id}, data, callback);
};

ProductsModel.prototype.delete = function(id, callback){
	//recupera o id e converte em id que o mongo entende.
	var _id = db.ObjectId(id);
	//deleta o product com o id informado.
	db.collection(source).remove({_id: _id}, callback);
};

module.exports = new ProductsModel();