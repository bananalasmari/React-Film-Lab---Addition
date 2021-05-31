import React from "react";
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";

class FlimRow extends React.Component {
    handleDetailsClick = () => {
        this.props.onShowDetails();
    };

    render() {
        const { title, poster_path, release_date } = this.props.film;
        const year = new Date(release_date).getFullYear();

        return (
            <div className="film-row" onClick={this.handleDetailsClick}>
                <FilmPoster path={poster_path} title={title} />

                <div className="film-summary">
                    <h1>{title}</h1>
                    <p>{year}</p>
                </div>
                <Fave
                    onFaveToggle={this.props.onFaveToggle}
                    isFave={this.props.isFave}
                />
            </div>
        );
    }
}

export default FlimRow;