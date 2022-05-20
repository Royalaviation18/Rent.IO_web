const express = require('express');
var router = express.Router();
const mysql = require('mysql');
var conn = require('../database.js');
var session = require('express-session');

const app = express();

router.get('/myprofile', function (req, res, next) {
  console.log(req.session.usrid);
  var sql = "Select * from users where userId = " + req.session.usrid;
  conn.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('myprofile', { usrid: req.session.usrid, title: 'userData', userdata: data, });
  });

});


module.exports = router;