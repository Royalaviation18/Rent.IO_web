const express = require('express');
var router = express.Router();
const mysql = require('mysql');
var conn = require('../database.js');
var session = require('express-session');

const app = express();

router.get('/myorders', function (req, res, next) {
  console.log(req.session.usrid);
  var sql = "Select * from orderdetails where userId = " + req.session.usrid;
  conn.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('myorders', { usrid: req.session.usrid, title: 'userData', userdata: data, });
  });

});


module.exports = router;