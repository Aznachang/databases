var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
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
    post: function (obj, callback) {
      console.log('I arrived to the post from the model');
      // var queryString = 'insert into users(user_name) values (?)';
      //var queryString = 'insert into users set ?';

      db.query('INSERT INTO users(user_name) VALUES (?)', obj, function(err, results) {
        console.log('database POST UserName: ', obj);                   
        if (err) {
          console.log('DataBase could not POST UserName: ' + err);
        }
        callback(err, results);
      });
    } 
  }
};

