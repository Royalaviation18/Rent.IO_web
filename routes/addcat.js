const express = require('express');
var router = express.Router();
const mysql = require('mysql');
var conn = require('../database.js');

const app = express();

router.get('/addcat', function (req, res, next) {
  console.log("Add Category");
  res.render('addcat',);
});




module.exports = router;