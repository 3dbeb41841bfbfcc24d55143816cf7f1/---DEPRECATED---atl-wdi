import React, { Component } from 'react';

import AdminView from './AdminView';
import ShopView from './ShopView';
import CartView from './CartView';

class HomePage extends Component {

    constructor() {
        super();

        this.state = {
            itemCurrentlyOnSale: 'A Hammer',
            editSaleItem: true,
            productList: [
                {
                    productName: 'Hammer',
                    description: 'Itsa hammer',
                    price: 12.3,
                },
                {
                    productName: 'Nail',
                    description: 'Itsa nail',
                    price: 0.12,
                }
            ],
            cartList: []
        };
    }

    _toggleEditSaleItem = () => {
        const editSaleItem = !this.state.editSaleItem;
        this.setState({ editSaleItem });
    };

    _handleItemCurrentlyOnSaleChange = (event) => {
        const itemCurrentlyOnSale = event.target.value;

        this.setState({ itemCurrentlyOnSale });
    };

    _addNewProductToProductList = (newProduct) => {
        const productList = [...this.state.productList];
        productList.push(newProduct);
        this.setState({ productList });
    };

    _deleteProductFromListByIndex = (productToDelete) => {
        const productList = [...this.state.productList];
        productList.splice(productToDelete, 1);
        this.setState({ productList })
    }

    _addProductToCart = (index) => {
        const product = {...this.state.productList[index]};
        const cartList = [...this.state.cartList];

        cartList.push(product);

        this.setState({ cartList })
    }

    _removeProductFromCart = (index) => {
        const cartList = [...this.state.cartList];

        cartList.splice(index, 1);

        this.setState({ cartList });
    }

    render() {
        return (
            <div>
                <h1>My Hardware Store</h1>

                <div>
                    <span>Currently On Sale: {this.state.itemCurrentlyOnSale}!</span>
                    <span>
                        <button onClick={this._toggleEditSaleItem}>
                            {this.state.editSaleItem ? 'Hide' : 'Edit Sale Item'}
                        </button>
                    </span>

                    {
                        this.state.editSaleItem ?
                            <div>
                                <input
                                    onChange={this._handleItemCurrentlyOnSaleChange}
                                    value={this.state.itemCurrentlyOnSale}
                                    type="text"
                                />
                            </div>
                            : null
                    }

                    <AdminView
                        productList={this.state.productList}
                        addNewProductToProductList={this._addNewProductToProductList}
                        deleteProductFromListByIndex={this._deleteProductFromListByIndex} />

                    <ShopView
                        productList={this.state.productList}
                        addProductToCart={this._addProductToCart} />

                    <CartView 
                        productList={this.state.cartList} 
                        removeProductFromCart={this._removeProductFromCart}/>
                </div>
            </div>
        )
    }
}

export default HomePage;