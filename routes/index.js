var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hashtag', function(req, res, next){
  res.render('hashtag');
});
module.exports = router;
