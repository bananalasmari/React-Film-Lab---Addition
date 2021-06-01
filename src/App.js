import axios from "axios"
import React, { Component } from 'react';
import './App.css';
import FilmDetails from './components/FilmDetails'
import FilmListing from './components/FilmListing'
import TMDB from "./TMDB"

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}
    }

    this.handleFaveToggle = this.handleFaveToggle.bind(this)
    this.handleDetailsClick = this.handleDetailsClick.bind(this)
  }

  handleFaveToggle = (film) => {
    const faves = this.state.faves.slice();
    const filmIndex = faves.indexOf(film);

    if (filmIndex === -1) {
      // add the movie
      faves.push(film)
      console.log("Adding" + film.title + " from faves...")
    }
    else {
      // remove the movie
      faves.splice(filmIndex, 1);
      console.log(`Removing ${film.title} from faves`)
    }

    this.setState({ faves })
    console.log(faves)

  }

  handleDetailsClick(film) {
    console.log("fetching details for " + film.title)
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
    axios({
      method: 'GET',
      url: url
    }).then(response => {
      console.log(response) // take a look at what you get back!
      console.log(`Fetching details for ${film.title}`);
      this.setState({ current: response.data });
    })
    this.setState({
      current: film
    })
  }

  render() {

    return (
      <div className="film-library">
        <FilmListing films={this.state.films} faves={this.state.faves} onFaveToggle={this.handleFaveToggle} onDetailsClick={this.handleDetailsClick} />
        <FilmDetails film={this.state.current} onDetailsClick={this.handleDetailsClick} />
      </div>
    )
  }
}