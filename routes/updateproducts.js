const express = require('express');
var router = express.Router();
const mysql = require('mysql');
var conn = require('../database.js');

const app = express();

router.get('/updateproducts', function (req, res, next) {
    console.log("Logins");
    // console.log(req.query.p_id);
    var id = req.query.p_id;
    var sql = "Select * from product where productId =" + id;
    conn.query(sql, function (err, data, fields) {
        // console.log("bhad");
        if (err) throw err;
        // console.log("yo");
        res.render('updateproducts', { title: 'productlist', userdata: data, p_id: req.query.p_id });
    })
    // res.render('updateproducts');    
});




module.exports = router;