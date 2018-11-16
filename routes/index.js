var express = require('express');
var router = express.Router();
var Exp = require('../models/exp');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hashtag', function(req, res, next){
  res.render('hashtag');
});
router.get('/hashtag/:tag', function(req, res,next){
    var Twit = require('twit');
    var config = require('../config');
    var T = new Twit(config);
    var params = {
      q: '#'+req.params['tag'].toString(),
      count: 100
    }
    T.get('search/tweets',params,function (err, data, response){
      var tweets = data.statuses ;
      res.render('single_hashtag.ejs',{'tweets':tweets})
    });

});


router.get('/share', function(req, res){
	res.render('share');
});

router.post('/share', function(req, res){
	console.log('req.........', req.body.experience)
	var exps = new Exp({
		Name: req.body.Name,
		experience: req.body.experience
	});

	var promise = exps.save()
	promise.then((exps) => {
		console.log('saved exps is', exps);

		Exp.find().exec(function(err, exp){
			res.render('view', {exp})
		});
	})
});


router.get('/resources', function(req, res, next){
  res.render('resources');
});
router.get('/test', function(req, res){
	res.render('test');
});

router.get('/view', function(req, res){
	Exp.find().exec(function(err, exp){
			res.render('view', {exp})
		});
});

 module.exports = router;
