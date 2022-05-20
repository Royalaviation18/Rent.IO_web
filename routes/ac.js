const express = require('express');
var router = express.Router();
const mysql = require('mysql');
var conn = require('../database.js');

const app = express();

router.get('/ac', function (req, res, next) {
  console.log('ac');
  var sql = 'select * from product where categoryId = 4 and productState = 1';
  conn.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('ac', { title: 'productList', proddata: data, });
  });

});




module.exports = router;