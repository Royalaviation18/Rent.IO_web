const express = require('express');
var router = express.Router();
const mysql = require('mysql');
var conn = require('../database.js');

const app = express();

router.get('/productapp', function (req, res, next) {
  console.log("pro");
  var sql = "select * from product where productState =0";
  conn.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('productapp', { title: "UserData", userdata: data });
  })

});




module.exports = router;