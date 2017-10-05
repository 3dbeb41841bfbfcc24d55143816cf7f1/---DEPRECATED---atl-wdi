import React from 'react'

import Product from './Product'

const ProductList = (props) => {
  const productList = props.productList

  const productComponents = productList.map((product, index) => {
    return <Product
      viewMode={props.viewMode}
      product={product}
      key={index}
      id={product.id}
      deleteProductFromListById={props.deleteProductFromListById}
      addProductToCart={props.addProductToCart}
      removeProductFromCart={props.removeProductFromCart}/>
  })

  return (
    <div>
      {productComponents}
    </div>
  )
}

export default ProductList
