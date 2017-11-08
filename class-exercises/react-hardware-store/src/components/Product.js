import React, { Component } from 'react';

class Product extends Component {
    render() {
        const productName = this.props.productName
        const description = this.props.description
        const price = this.props.price

        return (
            <div>
                <h3>{productName}</h3>
                <div>{description}</div>
                <div>{price}</div>
            </div>
        );
    }
}

export default Product;