import React from 'react'

import ProductList from './ProductList'
import ProductForm from './ProductForm'

const AdminView = (props) => {
  return (
    <div className="large-view-box">
      <h1>Admin</h1>

      <h2>Products</h2>
      <ProductList
        productList={props.productList}
        viewMode={'ADMIN'}
        deleteProductFromListById={props.deleteProductFromListById}
        showAdminOptions={true}/>

      <h2>Create a New Product</h2>
      <ProductForm
        addNewProductToProductList={props.addNewProductToProductList}/>

    </div>
  )
};

export default AdminView
