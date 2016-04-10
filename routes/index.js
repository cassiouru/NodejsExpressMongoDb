var express = require('express');
var	router = express.Router();

router.get('/', function(req, res){
	res.status(201);
	res.json({'key': 'ROLLA GRANDE'});
});

router.use('/cliente', require('./cliente'));

module.exports = router;