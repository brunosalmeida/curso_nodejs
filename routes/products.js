var express = require('express');
var router = express.Router();
var ProductsController = require('../controllers/ProductsController');

//cria as rotas para ProductsControllers

router.get 		('/', ProductsController.findAll);
router.post 	('/', ProductsController.create);

router.get 		('/:id', ProductsController.findOne);
router.put  	('/:id', ProductsController.update);
router.delete 	('/:id', ProductsController.delete);

module.exports = router;