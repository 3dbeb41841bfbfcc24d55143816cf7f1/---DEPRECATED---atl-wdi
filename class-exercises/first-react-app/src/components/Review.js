import React, { Component } from 'react';


class Review extends Component {
    render() {
        return (
            <div>
                <h3>
                    Rating: {this.props.rating}
                </h3>
                <h5>
                    Review: {this.props.review}
                </h5>
            </div>
        )
    }
}

export default Review