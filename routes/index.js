var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
var conn = require('../database.js');
var session = require('express-session')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/home', function (req, res, next) {
//   res.render('home',);
// });

// router.get('/login', function (req, res, next) {
//   console.log("Login");
//   res.render('login',);
// });

// router.get('/signup', function (req, res, next) {
//   console.log('signup');
//   res.render('signup',);
// })

// router.get('/about', function (req, res, next) {
//   console.log('about');
//   res.render('about');
// })

// router.get('/forgot', function (req, res, next) {
//   console.log('forgot');
//   res.render('forgotpass');
// })

// upload
// router.get('/upload', function (req, res, next) {
//   console.log('upload');
//   res.render('upload', { usrId: req.session.usrId });


// })

//upload
// router.get('/upload',function(req,res,next){
//   console.log('upload');
//   // console.log(req.session.usr_Id);
//   res.render('upload',{usr_Id: 'req.session.usr_Id'});

// });

// router.


//sofa
// router.get('/sofa', function (req, res, next) {
//   console.log('sofa');
//   var sql = "select * from product where categoryId = 1";
//   conn.query(sql, function (err, data, fields) {
//     if (err) throw err;
//     res.render('sofa', { title: 'productList', proddata: data, });
//   });
//   // res.render('sofa');
// });


//bed
// router.get('/bed', function (req, res, next) {
//   console.log('bed');
//   var sql = 'select * from product where categoryId = 2';
//   conn.query(sql, function (err, data, fields) {
//     if (err) throw err;
//     res.render('sofa', { title: 'productList', proddata: data, });
//   });

// });

//table
// router.get('/table', function (req, res, next) {
//   console.log('table');
//   var sql = 'select * from product where categoryId = 3';
//   conn.query(sql, function (err, data, fields) {
//     if (err) throw err;
//     res.render('sofa', { title: 'productList', proddata: data, });
//   });

// });

//ac
// router.get('/ac', function (req, res, next) {
//   console.log('ac');
//   var sql = 'select * from product where categoryId = 4';
//   conn.query(sql, function (err, data, fields) {
//     if (err) throw err;
//     res.render('sofa', { title: 'productList', proddata: data, });
//   });

// });

//tv
// router.get('/tv', function (req, res, next) {
//   console.log('tv');
//   var sql = 'select * from product where categoryId = 5';
//   conn.query(sql, function (err, data, fields) {
//     if (err) throw err;
//     res.render('sofa', { title: 'productList', proddata: data, });
//   });

// });

//wardrobe
// router.get('/wardrobe', function (req, res, next) {
//   console.log('wardrobe');
//   var sql = 'select * from product where categoryId = 6';
//   conn.query(sql, function (err, data, fields) {
//     if (err) throw err;
//     res.render('sofa', { title: 'productList', proddata: data, });
//   });

// });

//chair
// router.get('/chair', function (req, res, next) {
//   console.log('chair');
//   var sql = 'select * from product where categoryId = 7';
//   conn.query(sql, function (err, data, fields) {
//     if (err) throw err;
//     res.render('sofa', { title: 'productList', proddata: data, });
//   });

// });



//productdesc display
// router.get('/productDesc', function (req, res) {
//   var id = req.query.p_id;
//   var sql = "Select * from product where productId =" + id;
//   conn.query(sql, function (err, data, fields) {
//     if (err) throw err;
//     res.render('productDes', { title: 'productlist', proDesc: data });
//   })
// })

// router.get('/productDesc',function(req,res,next){
//   console.log('des');
//   res.render('productDes');
// })



module.exports = router;
