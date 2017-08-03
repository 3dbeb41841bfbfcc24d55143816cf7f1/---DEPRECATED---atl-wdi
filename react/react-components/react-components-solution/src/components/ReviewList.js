import React, { Component } from 'react';

import Review from './Review';

class ReviewList extends Component {
    render () {
        const reviews = [
            {comment: 'good'},
            {comment: 'good'},
            {comment: 'good'},
            {comment: 'good'},
        ];

        const reviewComponents = reviews.map((review) => {
            return <Review />;
        });

        return (
            <div>
                { reviewComponents }
            </div>
        )
        
    }
}

export default ReviewList;