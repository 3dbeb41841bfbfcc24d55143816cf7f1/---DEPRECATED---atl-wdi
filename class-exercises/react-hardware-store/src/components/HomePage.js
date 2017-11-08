import React, { Component } from 'react';
import AdminView from './AdminView'
import ShopView from './ShopView'
import CartView from './CartView'

class HomePage extends Component {

    constructor() {
        super();

        this.state = {
            itemCurrentlyOnSale: 'A Hamma',
            editSaleItem: false,
            showAdminView: false,
            productList: [
                {
                    productName: 'Hamma',
                    description: 'ISSA Hamma saaan',
                    price: 12.30,
                },
                {
                    productName: 'Nail',
                    description: 'ISSA Nameki... I mean a Nail! A Nail saaaaaan ',
                    price: 0.12,
                }
            ],
            cartList: []
        };
    };

    toggleEditSaleItem = () => {
        const editSaleItem = !this.state.editSaleItem;
        this.setState({ editSaleItem });
    };

    toggleAdminView = () => {
        const showAdminView = !this.state.showAdminView
        this.setState({ showAdminView })
    };

    handleItemCurrentlyOnSaleChange = (event) => {
        const itemCurrentlyOnSale = event.target.value;
        this.setState({ itemCurrentlyOnSale });
    };

    addNewProductToProductList = (newProduct) => {
        const productList = [...this.state.productList]
        productList.push(newProduct);
        this.setState({ productList });
    };

    deleteProductFromList = (productToDelete) => {
        const productList = [...this.state.productList]
        productList.splice(productToDelete, 1)
        this.setState({ productList })

    };

    addProductToCart = (index) => {
        const product = { ...this.state.productList[index] }
        const cartList = [...this.state.cartList]

        cartList.push(product)

        this.setState({ cartList })
    };

    removeProductFromCart = (index) => {
        const cartList = [...this.state.cartList]
        cartList.splice(index, 1)
        this.setState({ cartList })
    };

    render() {
        const adminView = <AdminView
            productList={this.state.productList}
            addNewProductToProductList={this.addNewProductToProductList}
            deleteProductFromList={this.deleteProductFromList}
        />

        const shopView = <ShopView
            productList={this.state.productList}
            addProductToCart={this.addProductToCart} />


        return (
            <div>
                <div>
                    <h1>Hardware Store</h1>
                    <span>currently on sale: {this.state.itemCurrentlyOnSale}!</span>
                    <br />
                    <div>

                    </div>

                    {
                        this.state.editSaleItem ?
                            <div>
                                <input
                                    onChange={this.handleItemCurrentlyOnSaleChange}
                                    value={this.state.itemCurrentlyOnSale}
                                    type="text" />
                            </div>
                            : null
                    }
                </div>
                <span>
                    <button onClick={this.toggleEditSaleItem}>
                        {this.state.editSaleItem ? 'Hide' : 'Edit Sale Item'}
                    </button>
                </span>

                <span>
                    <button onClick={this.toggleAdminView}>
                        {this.state.showAdminView ? 'Show Shop View' : 'Show Admin View'}
                    </button>
                </span>

                <div>
                    {this.state.showAdminView ? adminView : shopView}

                    <CartView
                        productList={this.state.cartList}
                        removeProductFromCart={this.removeProductFromCart}
                    />
                </div>
            </div>
        )
    };
}



export default HomePage;