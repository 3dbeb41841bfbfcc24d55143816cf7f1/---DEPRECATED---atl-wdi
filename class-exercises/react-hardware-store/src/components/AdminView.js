import React, { Component } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList'



class AdminView extends Component {
    render() {
        const productList = this.props.productList

        return (
            <div>
                <h1>Admin View</h1>
                <h2> Products</h2>
                <ProductList
                    productList={productList}
                    viewMode={'ADMIN'}
                    deleteProductFromList={this.props.deleteProductFromList}
                    showAdminOptions={true}
                />

                <h2>Create a new product</h2>
                <ProductForm
                    addNewProductToProductList={this.props.addNewProductToProductList}
                />
            </div>
        );
    }
}

export default AdminView;