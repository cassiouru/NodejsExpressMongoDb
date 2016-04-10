function ClienteModel(mongo){
	this.mongo = mongo;
};

ClienteModel.prototype.find = function(query, callback){
	this.mongo.collection('cliente').find(query, callback);
};

ClienteModel.prototype.findOne = function(_id, callback){
	var query = { _id: this.mongo.ObjectId(_id) };
	this.mongo.collection('cliente').findOne(query, callback);
};

ClienteModel.prototype.create = function(data, callback){
	this.mongo.collection('cliente').insert(query, callback);
};

ClienteModel.prototype.update = function(_id, data, callback){
	var query = { _id: this.mongo.ObjectId(_id) };
	this.mongo.collection('cliente').update(query, data, callback);
};

ClienteModel.prototype.delete = function(_id, callback){
	var query = { _id: this.mongo.ObjectId(_id) };
	this.mongo.collection('cliente').remove(query, callback);
};

module.exports = function(mongo){
	return new ClienteModel(mongo);
};