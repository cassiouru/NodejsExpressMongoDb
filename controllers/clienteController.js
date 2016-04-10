function ClienteController(clienteModel){
	this.model = clienteModel;
};

ClienteController.prototype.getall = function(req, res, next){
	this.model.find({}, function(err, data){
		if(err)
			return next(err);

		res.render('../views/clienteIndex', { title: 'Clientes' });
	});
};

ClienteController.prototype.getbyid = function(req, res, next){
	var id = res.params._id;
	this.model.findOne(_id, function(err, data){
		if(err)
			return next(err);

		res.json(data);
	});
};

ClienteController.prototype.create = function(req, res, next){
	var body = req.body;
	this.model.create(body, function(err, data){
		if(err)
			return next(err);

		res.json(data);
	});
};

ClienteController.prototype.update = function(req, res, next){
	var _id = req.params._id,
		body = req.body;
	this.model.update(_id, body, function(err, data){
		if(err)
			return next(err);

		res.json(data);
	});
};

ClienteController.prototype.delete = function(req, res, next){
	var _id = req.params._id;
		this.model.remove(_id, function(err, data){
			if(err)
				return next(err);

			res.json(data);
		});
};

module.exports = function(clienteModel){
	return new ClienteController(clienteModel);
}