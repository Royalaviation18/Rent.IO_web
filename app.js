var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var connection = require('./database.js');
var session = require('express-session');
const { cookie } = require('express/lib/response');
var multer = require('multer');
var nodemailer = require('nodemailer');
var moment = require('moment');

// var cookie = require('cookie-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const router = require('./routes/index');
var about = require('./routes/about');
var ac = require('./routes/ac');
var bed = require('./routes/bed');
var chair = require('./routes/chair');
var forgot = require('./routes/forgot');
var home = require('./routes/home');
var index = require('./routes/index');
var login = require('./routes/login');
var productDesc = require('./routes/productdesc');
var signup = require('./routes/signup');
var sofa = require('./routes/sofa');
var table = require('./routes/table');
var tv = require('./routes/tv');
var upload = require('./routes/upload');
var wardrobe = require('./routes/wardrobe');
var delivery = require('./routes/delivery');
var order = require('./routes/order');
var myprofile = require('./routes/myprofile');
var myproducts = require('./routes/myproducts');
var reset = require('./routes/resetpass');
var myorders = require('./routes/myorders');
var feedback = require('./routes/feedback');
var updateproducts = require('./routes/updateproducts');
var adminlogin = require('./routes/adminlogin');
var adminproducts = require('./routes/adminproducts');
var adminhome = require('./routes/adminhome');
var productapp = require('./routes/productapp');
var category = require('./routes/category');
var addcat = require('./routes/addcat');
<<<<<<< HEAD
=======
var adminorderdetails = require('./routes/adminorderdetails');
>>>>>>> 572b2e2 (Initial commit)
const { pid } = require('process');






var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('secret'));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  console.log(req.path);
  next()
})
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(about);
app.use(ac);
app.use(bed);
app.use(chair);
app.use(forgot);
app.use(home);
app.use(login);
app.use(productDesc);
app.use(signup);
app.use(sofa);
app.use(table);
app.use(tv);
app.use(upload);
app.use(wardrobe);
app.use(order);
app.use(myprofile);
app.use(updateproducts);
app.use(myproducts);
app.use(reset);
app.use(myorders);
app.use(feedback);
app.use(delivery);
app.use(adminhome);
app.use(category);
app.use(addcat);
<<<<<<< HEAD
=======
app.use(adminorderdetails);
>>>>>>> 572b2e2 (Initial commit)



// --------
app.use(adminlogin);
app.use(productapp);
app.use(adminproducts);




// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

app.use(express.static(__dirname + "/Products"));
app.use(express.static(__dirname + "/categories"));
app.use(express.static(__dirname + "/views"));



//signup
app.post('/submit', function (req, res, next) {
  console.log('submit form');
  var name = req.body.name;
  var email = req.body.email;
  var mobile = req.body.mobile;
  var aadhaar = req.body.aadhaar;
  var password = req.body.password;

  var sql = `INSERT INTO users (userName, userMobile,userEmail,userPassword,userDoc) VALUES ("${name}", "${mobile}", "${email}",MD5("${password}"),"${aadhaar}");`
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log('inserted');
    res.redirect('/login');
  })
})


const storages = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'categories')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const uploadds = multer({ storage: storages })

<<<<<<< HEAD
app.post('/addcategory' ,uploadds.single('image'),function(req,res,next){
  console.log('Add a category');
  var cid  = req.body.cid;
  var cname = req.body.cname;
  var photo = req.file.filename;
  
  var sql = `Insert into category (categoryId,categoryName,categoryImage) values ("${cid}","${cname}","${photo}");`
  connection.query(sql,function(err,result){
    if(err) throw err;
=======
app.post('/addcategory', uploadds.single('image'), function (req, res, next) {
  console.log('Add a category');
  var cid = req.body.cid;
  var cname = req.body.cname;
  var photo = req.file.filename;

  var sql = `Insert into category (categoryId,categoryName,categoryImage) values ("${cid}","${cname}","${photo}");`
  connection.query(sql, function (err, result) {
    if (err) throw err;
>>>>>>> 572b2e2 (Initial commit)
    console.log("yo");
    console.log("Category Added successfully")
    res.redirect('/adminhome');
  })
})

//login
app.post('/login', (req, res) => {
  console.log("Entered login module");
  var email = req.body.email;
  var password = req.body.password;
  var query = connection.query('Select * from users where userEmail = ? and userPassword = MD5(?)', [email, password], function (err, results, fields) {
    if (err) throw error;
    if (results.length > 0) {
      var user = results[0];
      req.session.usrid = user.userId;
      req.session.loggedin = true;
      console.log(req.session.usrid);
      req.session.save();
      res.redirect('home');
    } else {
      console.log('Incorrect Username and/or Password!');
      res.redirect('/');
    }
  });
});


//adminlogin
app.post('/alogin', (req, res) => {
  console.log("admin");
  var aemail = req.body.aemail;
  var apassword = req.body.apassword;
  var query = connection.query('Select * from admin where adminEmail = ?  and adminPassword = ?', [aemail, apassword], function (err, results, fields) {
    if (err) throw err;
    if (results.length > 0) {
      req.session.aloggedin = true;
      req.session.save();
      res.redirect('adminhome');
      // alert("Succes");
    }
    else {
      console.log('Incorrect username and/or password');
      res.redirect('/adminlogin');
    }
  });
});


//product approval
app.get('/productappnew', (req, res) => {
  console.log(req.query.p_id);
  var id = req.query.p_id;
  var sql = `Update product set productState = 1 where productId = ` + id;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log('Done');
    // res.redirect('/adminhome');
    res.redirect('/productapp');
  })
})


//adminproductdelete
app.get('/productdelete', (req, res) => {
  console.log(req.query.p_id);
  var id = req.query.p_id;
  var sql = `Delete from product where productId = ` + id;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log('Success');
    res.redirect('/adminproducts');
  })
})


//user delete product
app.get('/deleteproduct', (req, res) => {
  console.log(req.query.p_id);
  var id = req.query.p_id;
  var sql = `Delete from product where productID = ` + id;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Success");
    res.redirect('/myproducts');
  })
})


//delete category
app.get('/deletecat', (req, res) => {
  console.log(req.query.c_id);
  var id = req.query.c_id;
  var sql = `Delete from category where categoryId = ` + id;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Deleted successfully");
    res.redirect('/category');
  })
})


//mail
let mailTrn = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rent.ioapp@gmail.com",
    pass: "shinchan69"
  }
})
//forgotpassword
app.post('/forgot', (req, res) => {
  console.log("Entered forgot pass");
  var email = req.body.email;
  console.log(email);
  let details = {
    from: "rent.ioapp@gmail.com",
    to: email,
    subject: "Reset Your Password",
    text: "http://localhost:5001/resetpass"
  }

  mailTrn.sendMail(details, (err) => {
    if (err) throw err;
    else {
      console.log("Email has been sent");
      // alert("Email has been sent");


      res.redirect('/login');
    }
  })

})


//resetpassword
app.post('/passupdate', (req, res) => {
  console.log("Password update");
  var email = req.body.email;
  var pass = req.body.password;
  var sql = `Update users set userPassword = MD5("${pass}") where userEmail = '+email'`;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log('Updated user Forgot');
    res.redirect('/login');
  })
})



//logout
router.get('/logout', function (req, res) {
  req.session.destroy();
  res.redirect('/login');
})

//admin logout
router.get('/alogout', function (req, res) {
  req.session.destroy();
  res.redirect('/adminlogin');
})


//feedback
app.post('/ufeedback', function (req, res, next) {
  console.log("user feedback");
  var uid = req.body.usrid;
  var pid = req.body.pid;
  var fdesc = req.body.review;
  var frating = req.body.star;
  console.log("nice")
  console.log(moment(new Date()).format('YYYY-MM-DD HH:mm:ss'))
  // console.log(uid);
  // console.log(pid);  
  // console.log("thanks");
  var sql = `INSERT INTO feedback (feedbackDescription,feedbackRating,productId,userId) VALUES ("${fdesc}",${frating},${pid},${uid});`
  connection.query(sql, function (err, result) {
    console.log("gtt");
    if (err) throw err;
    console.log('feedback');
    res.redirect('/home');
  })
})


//product update
app.post('/updatepro', function (req, res, next) {
  console.log('Update Product');
  var pid = req.body.pid;
  console.log(pid);
  // console.log("yo");
  var pname = req.body.pname;
  var pdesc = req.body.pdesc;
  var daily = req.body.daily;
  var weekly = req.body.weekly;
  var monthly = req.body.monthly;
  var sql = `Update product set productName = "${pname}", productDescription = "${pdesc}",monthlyRate ="${monthly}",dailyRate ="${daily}",weeklyRate ="${weekly}" where productId =` + pid;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Updated");
    res.redirect('/myproducts');
  })

})

//update profile
app.post('/update', function (req, res, next) {
  console.log("updating your profile");
  var uid = req.session.usrid;
  var name = req.body.name;
  var email = req.body.email;
  var mobile = req.body.mobile;
  var aadhaar = req.body.aadhaar;
  // var password = req.body.password;

  var sql = `Update users set userName= "${name}" , userEmail ="${email}" , userMobile = "${mobile}",userDoc = "${aadhaar}" where userId =` + uid;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Updated");
    res.redirect('/home');
  })
})



//multer 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Products')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const uploads = multer({ storage: storage })

// upload item
app.post('/items', uploads.single('image'), function (req, res, next) {
  console.log("Uploading items");
  var pname = req.body.pname;
  var pdesc = req.body.description;
  var dprice = req.body.dprice;
  var photo = req.file.filename;
  console.log("hey");
  // console.log(file);
  var category = req.body.category;
  var wprice = req.body.wprice
  var mprice = req.body.mprice
  var userId = req.body.usrid;

  console.log("hey2");
  var sql = `INSERT INTO product (productName,productDescription,monthlyRate,productImage,dailyRate,weeklyRate,userId,categoryId,productState) values  ("${pname}","${pdesc}","${mprice}","${photo}","${dprice}","${wprice}","${userId}","${category}",0);`
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("record inserted");
    res.redirect('/home');
  });

  // res.redirect('/home');
});

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  //   // render the error page
  //   res.status(err.status || 500);
  //   res.render('error');
});

app.listen('5001', () => {
  console.log("Server started at 5001");
});

module.exports = app;
