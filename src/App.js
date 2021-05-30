import React from "react";
import "./App.css";
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";
import MovieDb from "./TMDB";

class App extends React.Component {
    render() {
        return (
            <div className="film-library">
                <FilmListing films={MovieDb.films} />
                <FilmDetails films={MovieDb.films} />
            </div>
        );
    }
}

export default App;