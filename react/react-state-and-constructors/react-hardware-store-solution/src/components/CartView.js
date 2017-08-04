import React, { Component } from 'react';

import ProductList from './ProductList';

class CartView extends Component {
    render() {
        return (
            <div>
                <h1>Cart</h1>

                <ProductList 
                    productList={this.props.productList} 
                    viewMode={'CART'}
                    addProductToCart={this.props.addProductToCart} 
                    removeProductFromCart={this.props.removeProductFromCart} />
            </div>
        );

    }
}

export default CartView;