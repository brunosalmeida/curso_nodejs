//Para executar o teste executar o comando node_modules/istanbul/lib/cli.js cover node_modules/mocha/bin/_mocha tests/*
//istabul é um modulo que faz code coverage

//carrega o modulo do supertest que faz a requisição http para simular o usuário.
var request = require('supertest');
//carrega a aplicação para ser testada
var app = require('../app');
//carrega o modulo que faz a verificação se o teste retornou verde.
var assert = require('assert');
//carrega o modulo que faz a conexão com o monodb.
var mongo = require('../db/mongo');


//cria o contexto que testa a controller produtc
describe('Products Endpoint', function(){

	//executa função antes de realizar os testes
	//before(function(){
	//});

	//executa função antes de realizar cada teste
	beforeEach(function(done){
		//deleta os dados da caoleção
		mongo.collection('products').remove({},done);
		
		//deleta a coleção
		//mongo.collection('products').drop(done);
	});

	it ('GET /products | returns all products', function(done){//a injeção de done é para avisar que a chamada é assincrona e o assert deve esperar o final da excução da função
		//insere um novo registro
		var products = [
						{name: 'Livro NodeJs'  , price: 19.90},
						{name: 'Livro Express' , price: 19.90},
						{name: 'Livro MongoDb' , price: 19.90},
					   ]
		mongo.collection('products').insert(products, function(){
			request(app) //faz a requisição simulando app.js
				.get('/products') //simula get
				.end(function(err, response){
					//console.log(err, result);// imprime o erro e o resultado
					//console.log(response.body);//imprime os dados dentro do body

					assert.ok(response.body.length >= 3);
					done();//o done avisa o assert deve ser feito somente quando a função findAll terminar sua execução.
			});
		})

	});

	/*it.only caso queira rodar somente este teste*/
	it ('GET /products/:id | returns a product', function(done){
		
		var product = {name: 'Livro NodeJs'  , price: 19.90};

		mongo.collection('products').insert(product, function(err, data){
			
			var _id = data._id;
			var _name = data.name;

			request(app) 
			.get('/products/' + _id)
			.end(function(err, response){
				var result = response.body;
				console.log(result);
				assert.equal(result._id, _id);
				assert.equal(result.name, _name); 
				done();
			});
		})
	});

	it ('POST /products |  create a product', function(done){
		
		var product = {name: 'Livro de NodeJs com Express'  , price: 19.90};

			request(app) 
			.post('/products')
			.send(product)
			.end(function(err, response){
				var result = response.body;
				assert.equal(result.name, 'Livro de NodeJs com Express'); 
				done();
			});	
	});

	it.only ('PUT /products/:id |  update a product', function(done){
		
		var product = {name: 'Livro NodeJs'  , price: 19.90};

		mongo.collection('products').insert(product, function(err, data){
						
			var _id = data._id;
			var _name = data.name;

			var _new_name = "Livro de NodeJs com Express";

			request(app) 
			.put('/products/' + _id)
			.send({name: _new_name})
			.end(function(err, response){
				var result = response.body;
				console.log(result);
				done();
			});
		})
	});

	it ('DELETE /products/:id |  delete a product', function(){
		
	});
});