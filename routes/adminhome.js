const express = require('express');
var router = express.Router();
const mysql = require('mysql');
var conn = require('../database.js');

const app = express();

router.get('/adminhome', function (req, res, next) {
  console.log("Login");
  var sql = "select * from users";
  conn.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('adminhome', { title: "UserData", userdata: data });
  })

});




module.exports = router;