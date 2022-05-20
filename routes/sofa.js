const express = require('express');
var router = express.Router();
const mysql = require('mysql');
var conn = require('../database.js');

const app = express();

router.get('/sofa', function (req, res, next) {
  console.log('sofa');
  var sql = "select * from product where categoryId = 1 and productState = 1";
  conn.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('sofa', { title: 'productList', proddata: data, });
  });
  // res.render('sofa');
});




module.exports = router;