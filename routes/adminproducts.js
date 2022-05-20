const express = require('express');
var router = express.Router();
const mysql = require('mysql');
var conn = require('../database.js');

const app = express();

router.get('/adminproducts', function (req, res, next) {
    console.log("admin");
    var sql = "select * from product";
    conn.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.render('adminproducts', { title: "UserData", userdata: data });
    })



});




module.exports = router;