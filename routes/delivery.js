const express = require('express');
var router = express.Router();
const mysql = require('mysql');
var conn = require('../database.js');

const app = express();

router.post('/delivery', function (req, res, next) {
  console.log("In delivery");
  var tid = req.body.tid;
  var sdate = req.body.sdate;
  var edate = req.body.edate;
  var totalamt = req.body.totalamt;
  var securityAmt = req.body.totalamt;
  var id = req.body.id;
  var uid = req.session.usrid;

  // const diffTime = Math.abs(edate - sdate);
  // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  // var hold = edate - sdate;

  var sql = `INSERT INTO orderdetails (userId,paymentId,productId,securityAmt,totalAmount,startDate,endDate) values ("${uid}","${tid}","${id}","${securityAmt}","${totalamt}","${sdate}","${edate}");`
<<<<<<< HEAD
  conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Payment Added successfully")
    res.render('delivery');
=======
  var sql2 = `INSERT into payment (paymentID,paymentAmt,userId) values ("${tid}","${totalamt}","${uid}");`
  conn.query(sql, function (err, result) {
    if (err) throw err;
    conn.query(sql2, function (err, result) {
      if (err) throw err;
      console.log("Payment Added successfully")
      res.render('delivery');
    })

>>>>>>> 572b2e2 (Initial commit)
  })

});



module.exports = router;