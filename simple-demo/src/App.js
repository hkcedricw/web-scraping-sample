import React, { Component } from 'react';
import { movieCheckApiCall } from './api/movieCheckApi';
import './App.css';

const STATUS_CHECK = 'Check';
const STATUS_WAIT = 'Waiting';

const initialState = {
  schedule: [],
  dateToCheck: '',
  status: STATUS_CHECK,
  error: ''
}

class App extends Component {
  constructor (props) {
    super(props);
    this.state = initialState;
    this.dateToCheckChange = this.dateToCheckChange.bind(this);
    this.callMovieCheckApi = this.callMovieCheckApi.bind(this);
    this.listMovies = this.listMovies.bind(this);
  }

  dateToCheckChange = (event) => {
    this.setState({
      ...this.state,
      dateToCheck: event.target.value
    });
  }

  callMovieCheckApi = async () => {
    try {
      this.setState({
        ...this.state,
        status: STATUS_WAIT
      })
      let result = await movieCheckApiCall(this.state.dateToCheck);
      this.setState({
        ...this.state,
        status: STATUS_CHECK,
        schedule: JSON.parse(result).schedule
      });
    } catch (error) {
      alert(error);
      this.setState(initialState);
      console.log(error);
    }
  }

  listMovies = () => {
    let movies = [];
    this.state.schedule.forEach(dateMoviePair => {
      movies.push((<div className='Date-container' key={dateMoviePair.date}>{dateMoviePair.date}</div>));
      dateMoviePair.movies.forEach(movie => {
        movies.push((<div key={`${dateMoviePair.date}${movie}.substing(0,2)`}>{movie}</div>));
      })
    });
    return movies;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Movie Schedule Checker
          </p>
        </header>
        <div className="Action-container">
          <div><input type='text' placeholder='Date: YYYY-MM' value={this.state.dateToCheck} onChange={this.dateToCheckChange} /></div>
          <div><button className='Button-check-movie' onClick={this.callMovieCheckApi}>{this.state.status}</button></div>
        </div>
        <div className="Schedule-container">
          {this.listMovies()}
        </div>
      </div>
    );
  }
}

export default App;
