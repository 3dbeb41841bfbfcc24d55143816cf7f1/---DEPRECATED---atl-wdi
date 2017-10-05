import React from 'react'

import ProductList from './ProductList'

const ShopView = (props) => {
  return (
    <div className="large-view-box">
      <h1>Shop</h1>

      <ProductList
        productList={props.productList}
        viewMode={'SHOP'}
        addProductToCart={props.addProductToCart}/>
    </div>
  )
}

export default ShopView
