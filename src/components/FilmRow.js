import React, { Component } from 'react'
import FilmPoster from './FilmPoster'
import Fave from './Fave'

export default class FilmRow extends Component {
    
    handleDetailsClick(film) 
    { 
        this.props.onDetailsClick(film)
    }
    
    render() {
        
        const filmRelease = new Date(this.props.film.release_date)
        return (
            <div className="film-row" onClick={() => this.handleDetailsClick(this.props.film.title)}>
                <FilmPoster film={this.props.film}/>
                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{filmRelease.getFullYear()}</p>
                    
                    
                </div>
                <Fave onFaveToggle={() => this.props.onFaveToggle(this.props.film)} isFave={ this.props.isFave }/>
            </div>
        )
    }
}