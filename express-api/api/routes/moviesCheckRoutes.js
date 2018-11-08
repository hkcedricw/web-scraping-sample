'use strict';

module.exports = (app) => {
  var blueChipsController = require('../controllers/moviesCheckController');

  app.route('/moviesCheck')
    .get(blueChipsController.checkCurrentMonthMovies);

  app.route('/moviesCheck/:date')
    .get(blueChipsController.checkSpecificMothMovies);
};