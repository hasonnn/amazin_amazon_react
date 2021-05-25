import React from 'react';
import ReviewDetails from './ReviewDetails';

function ReviewList(props) {
    const { reviews, deleteReview } = props
    return (
        <main>
            {
            reviews?
                reviews.map((review) => {
                    let { id, rating, body, reviewer, created_at } = review
                    return (
                        <ReviewDetails 
                        id = {id}
                        rating = {rating}
                        body = {body}
                        reviewerName = {reviewer.full_name}
                        createdAt = {created_at}
                        deleteReview = {deleteReview}
                        /> 
                    )     
                    })
                : null
            }
        </main>
    )
}

export default ReviewList;