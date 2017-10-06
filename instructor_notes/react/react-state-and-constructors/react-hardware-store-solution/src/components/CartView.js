import React, { Component } from 'react'

import ProductList from './ProductList'

class CartView extends Component {
  render () {
    const totalPrice = this.props.productList.reduce((totalPrice, product) => {
      return totalPrice + product.price
    }, 0.00)

    return (
      <div className="small-view-box">
        <h1>Cart</h1>

        <ProductList
          productList={this.props.productList}
          viewMode={'CART'}
          addProductToCart={this.props.addProductToCart}
          removeProductFromCart={this.props.removeProductFromCart} />

        <div>
          <h3>Total Price: {totalPrice}</h3>
        </div>
      </div>
    )
  }
}

export default CartView
