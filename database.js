var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost', 
  user: 'root',      
<<<<<<< HEAD
  password: 'password',     
=======
  password: 'root',     
>>>>>>> 572b2e2 (Initial commit)
  database: 'rent'
}); 
 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
<<<<<<< HEAD
module.exports = conn;
=======
module.exports = conn;  
>>>>>>> 572b2e2 (Initial commit)
