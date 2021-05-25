import React from 'react';

function ProductDetails({ title, description, price, createdAt, sellerName }) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Price: ${price}</p>
            <div>
                <small>Created at: {createdAt}</small> <br/>
                <small>Sold by: {sellerName}</small>
            </div>
        </div>
    )
}

export default ProductDetails;