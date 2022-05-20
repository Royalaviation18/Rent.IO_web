const express = require('express');
var router = express.Router();
const mysql = require('mysql');
var conn = require('../database.js');

const app = express();

router.get('/about', function (req, res, next) {
  console.log('about');
  res.render('about');
})




module.exports = router;