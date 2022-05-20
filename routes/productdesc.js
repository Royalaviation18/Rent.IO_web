const express = require('express');
var router = express.Router();
const mysql = require('mysql');
var conn = require('../database.js');

const app = express();


router.get('/productDesc', function (req, res) {
  var id = req.query.p_id;
  var sql = "Select * from product where productId =" + id;
  conn.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('productDes', { title: 'productlist', proDesc: data });
  })
});



module.exports = router;