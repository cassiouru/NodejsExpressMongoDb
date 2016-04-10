var express = require('express');
var	router = express.Router();

router.get('/', function(req, res){
	res.status(201);
	res.render('../views/index', { title : "Index" });
});

router.use('/cliente', require('./cliente'));

module.exports = router;