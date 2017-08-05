import React from 'react';

import ProductList from './ProductList';

const CartView = (props) => {
  const productList = props.productList;

  const totalPrice = productList.reduce((totalPrice, product) => {
    return totalPrice + (product.price * product.quantity);
  }, 0.00);

  return (
      <div className="small-view-box">
        <h1>Cart</h1>
        <div>
          <h3>Total Price: ${totalPrice}</h3>
        </div>
        <ProductList
            productList={productList}
            viewMode={'CART'}
            addProductToCart={props.addProductToCart}
            removeProductFromCart={props.removeProductFromCart}/>
      </div>
  );
};

export default CartView;