import React from "react";
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";

class FlimRow extends React.Component {
    handleDetailsClick = film => {
        console.log("Fetching details for: ", film);
    };

    render() {
        const { title, poster_path, release_date } = this.props.film;
        const year = new Date(release_date).getFullYear();

        return (
            <div
                className="film-row"
                onClick={() => this.handleDetailsClick(title)}
            >
                <FilmPoster path={poster_path} title={title} />

                <div className="film-summary">
                    <h1>{title}</h1>
                    <p>{year}</p>
                </div>
                <Fave />
            </div>
        );
    }
}

export default FlimRow;