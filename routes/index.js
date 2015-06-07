var express = require('express');
var router = express.Router();

var request = require('request');

var posts = [];

// var baseurl = 'https://api.instagram.com/v1/tags/kikakuma/media/recent';
// var baseurl = 'https://api.instagram.com/v1/tags/雲海/media/recent';
// var baseurl = 'https://api.instagram.com/v1/tags/%e9%9b%b2%e6%b5%b7/media/recent';
var baseurl = 'https://api.instagram.com/v1/tags/%e3%83%a9%e3%83%94%e3%83%a5%e3%82%bf%e3%81%ae%e9%81%93/media/recent';

/* GET home page. */
router.get('/', function(req, res, next) {
	request(baseurl + '?access_token=' + process.env.access_token, function(error, response, body){
		if (error) {
			// console.log(error);
		} else {
			var json = JSON.parse(body);
			// console.log(json);
			res.render('index', {
				title: 'Unkainsta - 雲海 x Instagram',
				json: json
			});
		}
	});

});

router.post('/', function(req, res){
	// console.log(req.body);
	request(baseurl + '?access_token=' + process.env.access_token + '&max_tag_id=' + req.body.max_tag_id, function(error, response, body){
		if (error) {
			// console.log(error);
		} else {
			var json = JSON.parse(body);
			// console.log(json);
			res.render('index', {
				title: 'Unkainsta - 雲海 x Instagram',
				json: json
			});
		}
	});
});

module.exports = router;
