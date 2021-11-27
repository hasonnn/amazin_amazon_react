import React from 'react'
import FormErrors from './FormErrors'

const NewProductForm = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const params = {
            title: formData.get('title'),
            description: formData.get('description'),
            price: formData.get('price')
        }
        props.createProduct(params)
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input name="title" id="title"/>
                <FormErrors forField="title" errors={props.errors}/>
                <br/>
            </div>
            <div>
                <label htmlFor="description">Description</label> 
                <textarea name="description" id="description"/>
                <FormErrors forField="description" errors={props.errors}/>
                <br/>
            </div>
            <div>
                <label htmlFor="price">Price</label> 
                <input name="price" id="price"/>
                <FormErrors forField="price" errors={props.errors}/>
                <br/>
            </div>
            <div>
                <input type="submit" value="Submit"/>
            </div>
        </form>
    )
}

export default NewProductForm;
