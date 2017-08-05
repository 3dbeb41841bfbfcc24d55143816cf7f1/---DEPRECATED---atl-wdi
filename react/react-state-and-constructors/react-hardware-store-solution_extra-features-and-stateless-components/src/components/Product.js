import React, {Component} from 'react';

class Product extends Component {

  _deleteProduct = () => {
    this.props.deleteProductFromListById(this.props.id);
  };

  _addToCart = () => {
    this.props.addProductToCart(this.props.id);
  };

  _removeFromCart = () => {
    this.props.removeProductFromCart(this.props.id);
  };

  _showOptions = () => {
    const viewMode = this.props.viewMode;

    const adminOptions =
        <div>
          <button onClick={this._deleteProduct}>Delete</button>
        </div>;

    const shopOptions =
        <div>
          <button onClick={this._addToCart}>Add To Cart</button>
        </div>;

    const cartOptions =
        <div>
          <button onClick={this._removeFromCart}>Remove From Cart</button>
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

  render() {
    const product = this.props.product;

    return (
        <div>
          <h3>{product.productName}</h3>
          <div>Description: {product.description}</div>
          <div>Price: ${product.price}</div>
          {product.quantity ?
              <div>Quantity: {product.quantity}</div>
              : null}

          {this._showOptions()}
        </div>
    );

  }
}

export default Product;