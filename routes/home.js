const express = require('express');
var router = express.Router();
const mysql = require('mysql');
var conn = require('../database.js');
var session = require('express-session');

const app = express();

router.get('/home', function (req, res, next) {
  console.log(req.session.usrid);
  res.render('home', { usrid: req.session.usrid });
});


module.exports = router;