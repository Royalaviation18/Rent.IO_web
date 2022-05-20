const express = require('express');
var router = express.Router();
const mysql = require('mysql');
var conn = require('../database.js');

const app = express();

router.get('/wardrobe', function (req, res, next) {
  console.log('wardrobe');
  var sql = 'select * from product where categoryId = 6 and productState = 1';
  conn.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('wardrobe', { title: 'productList', proddata: data, });
  });

});





module.exports = router;