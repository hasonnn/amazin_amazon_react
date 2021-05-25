import React, { Component } from 'react';
import ProductDetails from './ProductDetails';
import ReviewList from './ReviewList';
import { Product } from '../requests'


class ProductShowPage extends Component {
    constructor(props) {
        super(props)
        this.state = { product: {} }
        this.deleteReview = this.deleteReview.bind(this)
    }

    componentDidMount() {
        Product.show(this.props.match.params.id)
        .then((p) => {
            this.setState((state) => {
                return {
                    product: p
                }
            })
        })
    }

    deleteReview(id) {
        this.setState((state) => {
            return {
                reviews: state.reviews.filter(r => r.id !== id)
            }
        })
    }
    
    render() {
        const { title, description, price, created_at, seller } = this.state.product
        return (
            <main>
                <ProductDetails 
                    title = {title}
                    description = {description}
                    price = {price}
                    createdAt = {created_at}
                    sellerName = { seller? seller.full_name : null}
                />
                <ReviewList
                    reviews = { this.state.reviews }
                    deleteReview = { this.deleteReview }
                />
            </main>
        )
    }
}

export default ProductShowPage;