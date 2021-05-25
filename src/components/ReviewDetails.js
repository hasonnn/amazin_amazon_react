import React from 'react';
import StarRating from './StarRating'

function ReviewDetails({ id, rating, body, createdAt, reviewerName, deleteReview }) {
    return (
        <div>
            <small><StarRating max={5} currentNumber={rating} /></small>
            <p>{body}</p>
            <div>
                <small>Created at: {createdAt}</small>
                <small>Reviewed by: {reviewerName}</small>
            </div>
            <button onClick={() => deleteReview(id)}>Delete</button>
        </div>
    )
}

export default ReviewDetails;