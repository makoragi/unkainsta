var express = require('express');
var router = express.Router();

var request = require('request');

var posts = [];

/* GET home page. */
router.get('/', function(req, res, next) {
	// var baseurl = 'https://api.instagram.com/v1/tags/kikakuma/media/recent';
	// var baseurl = 'https://api.instagram.com/v1/tags/雲海/media/recent';
	var baseurl = 'https://api.instagram.com/v1/tags/%e9%9b%b2%e6%b5%b7/media/recent';
	request(baseurl + '?access_token=' + process.env.access_token, function(error, response, body){
		if (error) {
			// console.log(error);
		} else {
			var json = JSON.parse(body);
			// console.log(json.data);
			res.render('index', {
				title: 'Unkainsta - 雲海 x Instagram',
				data: json.data
			});
		}
	});

});

module.exports = router;
