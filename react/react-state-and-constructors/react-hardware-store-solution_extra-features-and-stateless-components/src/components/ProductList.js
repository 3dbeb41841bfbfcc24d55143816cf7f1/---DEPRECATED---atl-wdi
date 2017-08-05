import React, { Component } from 'react';

import Product from './Product';

class ProductList extends Component {
    render() {
        const productList = this.props.productList;

        const productComponents = productList.map((product, index) => {
            return <Product
                viewMode={this.props.viewMode}
                product={product}
                key={index}
                id={product.id}
                deleteProductFromListById={this.props.deleteProductFromListById}
                addProductToCart={this.props.addProductToCart} 
                removeProductFromCart={this.props.removeProductFromCart}/>
        });

        return (
            <div>
                {productComponents}
            </div>
        );
    }
}

export default ProductList;