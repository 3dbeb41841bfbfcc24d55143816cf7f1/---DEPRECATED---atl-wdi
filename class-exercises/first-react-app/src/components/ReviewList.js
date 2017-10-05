import React, { Component } from 'react'

import Review from './Review'

class ReviewList extends Component {
    render() {
        const reviews = [
            { rating: "IDK bro", comment: "If youre into vampires && shit" },
            { rating: "HILARIOUS", comment: "You gotta watch this, B" },
            { rating: "CLASSIC", comment: "Niggas be havin me dyin shawty" }
        ]
        const reviewComponents = reviews.map((review) => {
            return <Review rating={review.rating} review={review.comment} />
        })

        return (
            <div>
                {reviewComponents}
            </div>
        )
    }
}



export default ReviewList