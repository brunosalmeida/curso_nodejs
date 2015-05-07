/*configuração da aplicação*/
var express = require('express'); //servidor MVC.
var app = express();
var methodOverride = require('method-override');// entender PUT, DELETE por cabeçalho na requisição
var bodyParser = require('body-parser');//entender o request.body como objeto e não string
var path = require('path');//módulo node para entender o caminho absoluto d aaplicação.
var swig = require('swig');//engine template.

//Módulo para que o nodejs entenda o cabeçalho de input para PUT e DELETE.
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));

//Módulo para o nodejs conseguir converter a requisição em json.
app.use(bodyParser.json());
//Módulo para o nodejs conseguir converter os filhos em json também.
app.use(bodyParser.urlencoded({ extended: true}));

//Módulo de engine template (como se fosse o Razor do asp.net)
app.engine('html', swig.renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

if(app.get('env') == 'development'){// variavel NODE_ENV.
//usa o node para servir os aquivos estáticos.
app.use(express.static(path.join(__dirname,'public'))); 
}

/*Configuração de Rotas*/
//Ao usar o require ele procura o arquivo routes.js se não achar procura um diretorio chamado routes com um arquivo index.js
app.use('/', require('./routes')(app));

/*Configuração de Erros*/
app.use(function (resquest, response, next) {
  response.send('Erro ');
});

app.use(function (err,resquest, response, next) {
  console.log(err);
  response.status(500).send('Erro 2');
});

module.exports = app;