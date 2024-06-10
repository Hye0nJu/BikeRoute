var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/index', (req, res, next) => (
  res.render('index')
));

router.get('/map', (req, res, next) => (
  res.render('map')
));

router.get('/routeSet', (req, res, next) => (
  res.render('routeSet')
));

router.get('/viewPoint', (req, res, next) => (
  res.render('viewPoint')
));

module.exports = router;
