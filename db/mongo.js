//instancia modulo que conversa com o mongodb
var mongojs = require('mongojs');

//configura qual base de dados será utilizada
var db = mongojs('localhost/vitrine');
db.on('error', function(err){
	console.log(err);
});

//exporta a "classe" mongo.js para quem fez o require('mongo')
module.exports = db;