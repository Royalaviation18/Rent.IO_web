const express = require('express');
var router = express.Router();
const mysql = require('mysql');
var conn = require('../database.js');

const app = express();

router.get('/table', function (req, res, next) {
  console.log('table');
  var sql = 'select * from product where categoryId = 3 and productState = 1';
  conn.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('table', { title: 'productList', proddata: data, });
  });

});




module.exports = router;