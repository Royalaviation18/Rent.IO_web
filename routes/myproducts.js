const express = require('express');
var router = express.Router();
const mysql = require('mysql');
var conn = require('../database.js');
var session = require('express-session');

const app = express();

router.get('/myproducts', function (req, res, next) {
  console.log(req.session.usrid);
  var uid = req.session.usrid;
  var sql = "Select * from product where userId= " + uid;
  conn.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('myproducts', { usrid: req.session.usrid, title: 'productList', proddata: data, });
  })

});


module.exports = router;