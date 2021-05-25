import React, { Component } from 'react'
import NewProductForm from './NewProductForm'
import { Product } from '../requests'
 
const NewProductPage = (props) => {
    function createProduct(params) {
        Product.create(params)
        .then((p) => {
            const id = p.id;
            props.history.push(`/products/${id}`)
        })
    }
    return (
        <div>
            <NewProductForm createProduct = {createProduct} />
        </div>
    )
}

export default NewProductPage