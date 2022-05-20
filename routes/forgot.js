const express = require('express');
var router = express.Router();
const mysql = require('mysql');
var conn = require('../database.js');

const app = express();

router.get('/forgot', function (req, res, next) {
  console.log('forgot');
  res.render('forgotpass');
})




module.exports = router;