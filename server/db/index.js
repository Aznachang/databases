var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var db = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});

db.connect(err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Made it.');
});

module.exports = db;