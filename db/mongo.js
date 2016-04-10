var mongo = require('mongojs');

'use strict'

function _connection(){
	var username = '',
	    password = '',
	    server = 'localhost',
	    port = '27017',
	    database = 'livro_nodejs',
	    auth = username ? username + ':' + password + '@' : '';

	 return 'mongodb://' + auth + server + ':' + port + '/' + database;
}

var db = mongo(_connection());

db.on('error', function(err){
	console.log(err)
});

module.exports = db;