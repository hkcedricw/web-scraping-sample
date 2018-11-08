'use strict';
var axios = require('axios');
var cheerio = require('cheerio');

var scrapUrl = 'https://www.imdb.com/movies-coming-soon/';

var getMoviesSchedule = async (date='') => {
  let moviesSchedule = {
    schedule: []
  };
  try {
    console.log(`${scrapUrl}${date}`);
    const response = await axios.get(`${scrapUrl}${date}`);
    const $ = cheerio.load(response.data);
    const movieList = $('.list.detail');

    let movies = [];
    let movieDates = [];
    let checkingDate = '';
    for (let i=0; i < movieList.children().length; i++) {
      let element = movieList.children().eq(i);
      if ( element.hasClass('li_group')) {
        checkingDate = element.text();
        movieDates.push(checkingDate);
        movies[checkingDate] = [];
      } else {
        movies[checkingDate].push(element.find('.overview-top').children().eq(0).text());
      }
    }

    movieDates.forEach(date => moviesSchedule.schedule.push({
      date,
      movies: movies[date]
    }));

    console.log(JSON.stringify(moviesSchedule));
    return moviesSchedule;
    
  } catch (error) {
    //TODO: further break down error to 4xx, 500...etc
    console.log(error);
    throw error;
  }
}

exports.checkCurrentMonthMovies = async (req, res) => {
  try {
    res.json(JSON.stringify(await getMoviesSchedule()));
  } catch (error) {
    res.status(400).json({error});
  }
};

exports.checkSpecificMothMovies = async (req, res) => {
  try {
    res.json(JSON.stringify(await getMoviesSchedule(req.params.date)));
  } catch (error) {
    res.status(400).json({error:'request error'});
  }
};