var express         = require('express'),
    morgan          = require('morgan'),
    compress        = require('compression'),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override'),
    expressLayouts  = require('express-ejs-layouts');

module.exports = function() {
  var app = express();

  if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
  }else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
  }

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(bodyParser.json());
  app.use(methodOverride());

  // allow CORS before routing
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  require('../app/routes/my.server.routes.js')(app);
  return app;
};
