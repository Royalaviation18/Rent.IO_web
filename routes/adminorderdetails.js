const express = require('express');
var router = express.Router();
const mysql = require('mysql');
var conn = require('../database.js');

const app = express();

router.get('/adminorderdetails', function (req, res, next) {
  console.log("adminorderdetails");
  var sql = "select * from orderdetails";
  conn.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('adminorderdetails', { title: "UserData", userdata: data });
})

});




module.exports = router;