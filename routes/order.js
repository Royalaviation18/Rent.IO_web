const express = require('express');
var router = express.Router();
const mysql = require('mysql');
var conn = require('../database.js');

const moment = require('moment'); // Add moment.js for date formatting

const app = express();

router.post('/order', function (req, res, next) {

  var sdate = req.body.datepicker;  // Start date (MM/DD/YYYY format)
  var totalamt = req.body.rate;
  var holding = req.body.hold;

  // Convert dates to YYYY-MM-DD format using moment.js
  var formattedSDate = moment(sdate, 'MM/DD/YYYY').format('YYYY-MM-DD');
  var formattedEDate = moment(edate, 'MM/DD/YYYY').format('YYYY-MM-DD');

  var sql = "SELECT * FROM product WHERE productId = " + mysql.escape(id);  // Using mysql.escape to prevent SQL injection

  conn.query(sql, function (err, data, fields) {
    if (err) throw err;

    // Render the 'order' page with the formatted dates
    res.render('order', {
      title: 'productlist',
      proDesc: data,
      id: id,
      sdate: formattedSDate,  // Pass the formatted start date
      edate: formattedEDate,  // Pass the formatted end date
      totalamt: totalamt,
      hold: holding
    });
  });
});

module.exports = router;
