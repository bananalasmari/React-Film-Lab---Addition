import React, { Component } from 'react'

export default class Fave extends Component{
    
    handleClick(e)
    {
        e.stopPropagation()
        this.props.onFaveToggle()
    }
    
    render() {
        const isFaveClass = 'film-row-fave '.concat(this.props.isFave ? 'remove_from_queue' : 'add_to_queue')
        return (
            <div className={isFaveClass} onClick={(e) => this.handleClick(e)}>
                <p className="material-icons">{ this.props.isFave ? 'remove_from_queue' : 'add_to_queue' }</p>
            </div>
        )
    }
}