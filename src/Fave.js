import React from "react";

class Fave extends React.Component {
    handleClick = e => {
        e.stopPropagation();
        console.log("Handling Fave click!");

        this.props.onFaveToggle(this.props.film);
    };

    render() {
        const isFave = this.props.isFave ? "remove_from_queue" : "add_to_queue";

        return (
            <div
                className={`film-row-fave ${isFave}`}
                onClick={this.handleClick}
            >
                <p className="material-icons">{isFave}</p>
            </div>
        );
    }
}

export default Fave;