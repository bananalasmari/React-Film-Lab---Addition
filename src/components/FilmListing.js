import React, { Component } from "react";
import FilmRow from './FilmRow'

export default class FilmListing extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       filter: 'all',
    }
  }

  handleFilterClick(filter){
    this.setState({
      filter: filter
    });
  }
  
  render() {
    const rows = this.state.filter === 'all' ? this.props.films.map(film => {
      return <FilmRow
        film={film}
        key={film.id}
        onFaveToggle={() => this.props.onFaveToggle(film)} isFave={this.props.faves.includes(film)} 
        onDetailsClick={ () => this.props.onDetailsClick(film) }/>
    }) :
      this.props.faves.map(film => {
        return <FilmRow
          film={film}
          key={film.id}
          onFaveToggle={() => this.props.onFaveToggle(film)} isFave={this.props.faves.includes(film)}
          onDetailsClick={ () => this.props.onDetailsClick(film) }/>
      });
      
    return (
      <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <div className="film-list-filters">
            <div className={`film-list-filter ${ this.state.filter === 'all' ? 'is-active' : ''} `} onClick={() => this.handleFilterClick('all')}>
              ALL
              <span className="section-count">{this.props.films.length}</span>
            </div>
              
            <div className={`film-list-filter ${ this.state.filter === 'faves' ? 'is-active' : ''}`}  onClick={() => this.handleFilterClick('faves')}>
            FAVES
                <span className="section-count">{ this.props.faves.length }</span>
            </div>
          </div>
          
          { rows }
      </div>
    );
  }
}