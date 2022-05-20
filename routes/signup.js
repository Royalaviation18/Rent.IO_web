const express = require('express');
var router = express.Router();
const mysql = require('mysql');
var conn = require('../database.js');

const app = express();

router.get('/signup', function (req, res, next) {
  console.log('signup');
  res.render('signup',);
})





module.exports = router;