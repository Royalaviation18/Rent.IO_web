const express = require('express');
var router = express.Router();
const mysql = require('mysql');
var conn = require('../database.js');

const app = express();

router.get('/adminlogin', function (req, res, next) {
  console.log("Login");
  res.render('adminlogin',);
});




module.exports = router;