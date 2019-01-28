'use strict';

module.exports = (app) => {
  var moviesCheckController = require('../controllers/moviesCheckController');

  app.route('/moviesCheck')
    .get(moviesCheckController.checkCurrentMonthMovies);

  app.route('/moviesCheck/:date')
    .get(moviesCheckController.checkSpecificMothMovies);
};
