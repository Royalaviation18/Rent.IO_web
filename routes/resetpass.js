const express = require('express');
var router = express.Router();
const mysql = require('mysql');
var conn = require('../database.js');

const app = express();

router.get('/resetpass', function (req, res, next) {
  console.log('reset password');
  res.render('resetpass');
})




module.exports = router;