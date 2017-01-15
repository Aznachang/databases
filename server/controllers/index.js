var models = require('../models');

module.exports = {

  messages: {
    get: function (req, res) {

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var body = '';
      // console.log('Messages POST: ' + JSON.parse(req.body));
      req.on('data', function(data) {
        body += data;
      });
      req.on('end', function(data) {
        console.log(JSON.parse(body));

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
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results) {
        if (err) { console.log('get controller: error'); }
        res.json(results);
      });
    },
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

