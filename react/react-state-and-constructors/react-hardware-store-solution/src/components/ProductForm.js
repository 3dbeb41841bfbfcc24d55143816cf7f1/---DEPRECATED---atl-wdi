import React, { Component } from 'react';

class ProductForm extends Component {

    constructor() {
        super();

        this.state = {
            newProduct: {}
        }
    }

    _handleNewProductChange = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;

        const newProduct = { ...this.state.newProduct };
        newProduct[attributeName] = attributeValue;

        this.setState({ newProduct })
    };

    _addNewProduct = (event) => {
        event.preventDefault();

        this.props.addNewProductToProductList(this.state.newProduct);
    };

    render() {
        return (
            <div>
                <form onSubmit={this._addNewProduct}>
                    <div><input name="productName" type="text" placeholder="Name" onChange={this._handleNewProductChange} /></div>
                    <div><input name="description" type="text" placeholder="Description" onChange={this._handleNewProductChange} /></div>
                    <div><input name="price" type="number" min="0.00" step="0.01" placeholder="Price" onChange={this._handleNewProductChange} /></div>
                    <div><input type="submit" value="Create New Product" /></div>
                </form>
            </div>
        );

    }
}

export default ProductForm;