const express = require('express');
<<<<<<< HEAD
var router = express.Router();
const mysql = require('mysql');
var conn = require('../database.js');
var session = require('express-session');
// var main = require('../app')

const app = express();

router.get('/upload', function (req, res, next) {
  var sql = "Select * from category";
  console.log('upload');
  console.log(req.session.usrid);
  conn.query(sql, function (er, data, fields) {
    res.render('upload', { usrid: req.session.usrid, title: 'catlist', catdata: data });
  })


});


module.exports = router;


=======
const router = express.Router();
const conn = require('../database.js');

// Upload route
router.get('/upload', (req, res, next) => {
  if (!req.session.usrid) {
    console.log("Unauthorized access to /upload");
    return res.status(401).send("You must be logged in to upload a product.");
  }

  const sql = "SELECT * FROM category";
  conn.query(sql, (err, data, fields) => {
    if (err) {
      console.error("Database Error:", err);
      return res.status(500).send("Internal Server Error");
    }

    console.log("Rendering upload page for user:", req.session.usrid);
    res.render('upload', {
      usrid: req.session.usrid,
      title: 'Category List',
      catdata: data,
    });
  });
});

module.exports = router;
>>>>>>> 572b2e2 (Initial commit)
