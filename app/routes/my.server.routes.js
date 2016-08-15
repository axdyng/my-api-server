module.exports = function(app) {
  var myController = require('../controllers/dylan.controller');

  // routing
  app.get('/dylan', myController.index);
};
