var express = require('express');
var router = express.Router();

/* GET full name. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Geethika Kolukuluri' });
});

module.exports = router;