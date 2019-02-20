import React, { Component } from 'react';
import Product from './Product.js'
class ProductList extends Component {
    render() {
        const productList = this.props.productList
        console.log(ProductList);

        const productComponents = productList.map((product, index) => {
            return <Product
                productName={product.productName}
                description={product.description}
                price={product.price}
                key={index} />;
        });

        return (
            <div>
                {productComponents}
            </div>
        );
    }
}

export default ProductList;