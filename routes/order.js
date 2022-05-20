const express = require('express');
var router = express.Router();
const mysql = require('mysql');
var conn = require('../database.js');

const app = express();

router.post('/order', function (req, res, next) {
  var id = req.body.pid;
  var sdate = req.body.datepicker
  var edate = req.body.datepicker2
  var totalamt = req.body.rate
  var holding = req.body.hold;
  // var noh = rq.query.holding;
  var sql = "Select * from product where productId =" + id;
  conn.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('order', { title: 'productlist', proDesc: data, id: id, sdate: sdate, edate: edate, totalamt: totalamt, hold: holding });
  })
})




module.exports = router;