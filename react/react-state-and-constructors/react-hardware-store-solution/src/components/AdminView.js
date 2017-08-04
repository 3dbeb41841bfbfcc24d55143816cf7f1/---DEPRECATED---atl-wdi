import React, { Component } from 'react';

import ProductList from './ProductList';
import ProductForm from './ProductForm';

class AdminView extends Component {
    render() {
        const productList = this.props.productList;

        return (
            <div>
                <h1>Admin View</h1>

                <h2>Products</h2>
                <ProductList
                    productList={productList}
                    viewMode={'ADMIN'}
                    deleteProductFromListByIndex={this.props.deleteProductFromListByIndex}
                    showAdminOptions={true} />

                <h2>Create a New Product</h2>
                <ProductForm
                    addNewProductToProductList={this.props.addNewProductToProductList} />

            </div>
        );

    }
}

export default AdminView;	