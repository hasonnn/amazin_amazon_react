import React, { Component } from 'react'
import { Product } from '../requests'

class ProductIndexPage extends Component {
    constructor(props) {
        super(props)
        this.state = { products: [] }
        // this.createProduct = this.createProduct.bind(this)
    }

    componentDidMount() {
        Product.index()
        .then((p) => {
            this.setState((state) => {
                return {
                    products: p
                }
            })
        })
    }

    // createProduct(params){
    //     this.setState((state) => {
    //       return {
    //         products: [
    //           ...state.products,
    //           {
    //             id:  Math.max(...state.products.map(q => q.id)) + 1,
    //             ...params
    //           }
    //         ]
    //       }
    //     })
    // }

    deleteProduct(id) {
        this.setState((state) => {
            return {
                products: state.products.filter(p => p.id !== id)
            }
        })
    }

    render() {
        return (
            <main>
                <h1>Products</h1>
                <ul 
                    style={{
                        listStyle: 'none',
                        paddingLeft: 0,
                    }}
                >
                    {this.state.products.map(({ id, title }) => (
                        <li key={id}>
                            <a href="#">{id} - {title}</a>
                            <button onClick={() => this.deleteProduct(id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </main>
        )
    }
}

export default ProductIndexPage

