var express = require('express');
var	router = express.Router();

var mongo = require('../db/mongo');
var clienteModel = require('../models/clienteModel')(mongo);
var clienteController = require('../controllers/clienteController')(clienteModel);

router.get('/', clienteController.getall.bind(clienteController));
router.get('/:_id', clienteController.getbyid.bind(clienteController));
router.post('/', clienteController.create.bind(clienteController));
router.put('/:_id', clienteController.update.bind(clienteController));
router.delete('/_id', clienteController.delete);

module.exports = router;