var mongo_url = process.env.MONGODB_URI || 'mongodb://localhost/myapi_db';

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(mongo_url);

var express = require('./config/express');
var app = express();

app.set('port', (process.env.PORT || 4000));

// require models
var User = require('./app/models/user');

// signup route
app.post('/signup', function(req, res) {
  //res.send(req.body);
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if(err) return res.status(400).send(err);

    return res.status(200).send({ message: 'User created' });
  });
});

// login route
app.post('/login', function(req, res){
  var loggingin_user = req.body;

  // find if existing user data exists
  User.findOne( loggingin_user, function(err, found_user) {
    if(err) return res.status(400).send('Invalid email / password');

    if(found_user) {
      return res.status(200).send('Login success');
    } else {
      return res.status(400).send( {message: 'Login failed'});
    }
  });
});

app.listen(app.get('port'), function(){
  console.log('Express server running at localhost', app.get('port'));
});

module.exports = app;
