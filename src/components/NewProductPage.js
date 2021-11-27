import React, { Component } from 'react'
import NewProductForm from './NewProductForm'
import { Product } from '../requests'
 
class NewProductPage extends Component {
    constructor(props) {
        super(props)
        this.state = { errors: [] }
        this.createProduct = this.createProduct.bind(this)
    }
    createProduct(params) {
        Product.create(params)
        .then((p) => {
            if (p.errors) {
                this.setState({errors: p.errors})
            } else {
                this.props.history.push(`/products/${p.id}`)
            }
        })
    }
    render() {
        return (
            <div>
                <NewProductForm 
                    createProduct = {this.createProduct} 
                    errors={this.state.errors}
                />
            </div>
        )
    }
}


export default NewProductPage