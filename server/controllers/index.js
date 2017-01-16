var models = require('../models');

module.exports = {
  // Call the Database Model messages.get 
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results) {
        if (err) { /* do something */ }
        res.json(results);
      });
    }, // a function which handles a get request for all messages
    // Call the Database Model messages.post 
    post: function (req, res) {
        var params = [req.body.username,
        req.body.message,
        req.body.roomname];

        models.messages.post(params, function(err, results) {
          if (err) {
            throw error;
            console.log('Error Posting to Server: ', err);
          }

          res.sendStatus(201);
        });

      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Call the Database Model users.get 
    get: function (req, res) {
      models.users.get(function(err, results) {
        if (err) { console.log('get controller: error'); }
        res.json(results);
      });
    },
    //Call the Database Model users.post
    post: function (req, res) {
      console.log('please come here', req.body.user_name);

      var params = [req.body.username]; //username
      models.users.post(params, function(err, results ) {
        if (err) {
          console.log('Error Posting to Server: ', err);
        }
        res.sendStatus(201);
        
      });
    }
  }
};

