var db = require('../db');

module.exports = {
  //we are receiving all the messages from the Messages Database Table
  messages: {
    get: function (cb) {
      var queryStr = 'select messages.id, messages.text, messages.roomname, users.user_name \
                      from messages';
      db.query(queryStr, function (err, results) {
        cb(err, results);  
      });
    }, // a function which produces all the messages
    post: function (array, cb) {
      var queryStr = 'insert into messages(text,userid, roomname) \
                      value (?, (select id from users where username = ?), ?)';
      db.query(queryStr, function (err, results) {
        cb(err, results);  
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryStr = 'select * from users';

      db.query(queryStr, function (err, results) {
        callback(err, results);
      });
    },                   
    //passing in 'data' from users.post (controller)
    post: function (array, callback) {
      console.log('I arrived to the post from the model');
      // var queryString = 'insert into users(user_name) values (?)';
      //var queryString = 'insert into users set ?';

      //Write out Queries based on our 'schema.sql'
      db.query('INSERT INTO users (user_name) VALUES (?)', array, function(err, results) {
        console.log('database POST UserName: ', array);                   
        if (err) {
          console.log('DataBase could not POST UserName: ' + err);
        }
        callback(err, results);
      });
    } 
  }
};

