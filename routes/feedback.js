const express = require('express');
var router = express.Router();
const mysql = require('mysql');
var conn = require('../database.js');
var session = require('express-session');

const app = express();

router.get('/feedback', function (req, res, next) {
  var pid = req.query.pid;
  console.log(pid);
  console.log(req.session.usrid);
  res.render('feedback', { pid: req.query.pid, usrid: req.session.usrid });
});


module.exports = router;