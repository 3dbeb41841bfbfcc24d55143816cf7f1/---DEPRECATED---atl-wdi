import React, { Component } from 'react'

import Review from './Review';
import ReviewList from './ReviewList'

class Movie extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>

                <div>Rating: {this.props.rating}</div>
                <p>Description: {this.props.description}</p>
                <ReviewList />
            </div>

        )
    }
}

export default Movie
