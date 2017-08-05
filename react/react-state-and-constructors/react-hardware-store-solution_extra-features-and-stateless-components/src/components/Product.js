import React from 'react';

const Product = (props) => {
  const product = props.product;

  const _deleteProduct = () => {
    props.deleteProductFromListById(props.id);
  };

  const _addToCart = () => {
    props.addProductToCart(props.id);
  };

  const _removeFromCart = () => {
    props.removeProductFromCart(props.id);
  };

  const _showOptions = () => {
    const viewMode = props.viewMode;

    const adminOptions =
        <div>
          <button onClick={_deleteProduct}>Delete</button>
        </div>;

    const shopOptions =
        <div>
          <button onClick={_addToCart}>Add To Cart</button>
        </div>;

    const cartOptions =
        <div>
          <button onClick={_removeFromCart}>Remove From Cart</button>
        </div>;

    switch (viewMode) {
      case 'ADMIN':
        return adminOptions;
      case 'SHOP':
        return shopOptions;
      case 'CART':
        return cartOptions;
      default:
        return null;
    }
  };

  const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });
  const formattedPrice = priceFormatter.format(product.price);

  return (
      <div className="product-display">
        <h3>{product.productName}</h3>
        <div>Description: {product.description}</div>
        <div>Price: {formattedPrice}</div>
        {product.quantity ? <div>Quantity: {product.quantity}</div>
            : null}

        {_showOptions()}
      </div>
  );
};

export default Product;