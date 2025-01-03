const express = require('express');
var router = express.Router();
const mysql = require('mysql');
var conn = require('../database.js');
var session = require('express-session');
// var main = require('../app')

const app = express();

router.get('/upload', function (req, res, next) {
  var sql = "Select * from category";
  console.log('upload');
  console.log(req.session.usrid);
  conn.query(sql, function (er, data, fields) {
    res.render('upload', { usrid: req.session.usrid, title: 'catlist', catdata: data });
  })


});


module.exports = router;

