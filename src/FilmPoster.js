import React from "react";

class FilmPoster extends React.Component {
    render() {
        const { path, title } = this.props;
        const poster_url = "https://image.tmdb.org/t/p/w780/" + path;

        return <img src={poster_url} alt={title} />;
    }
}

export default FilmPoster;