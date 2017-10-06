import React, {Component} from 'react'

import AdminView from './AdminView'
import ShopView from './ShopView'
import CartView from './CartView'

class HomePage extends Component {
  constructor () {
    super()

    this.state = {
      itemCurrentlyOnSale: 'A Hammer',
      editSaleItem: false,
      showAdminView: false,
      productList: [
        {
          id: 0,
          productName: 'Hammer',
          description: 'Itsa hammer!',
          price: 12.3
        },
        {
          id: 1,
          productName: 'Nail',
          description: 'Itsa nail!',
          price: 0.12
        }
      ],
      cartList: []
    }
  }

  toggleEditSaleItem = () => {
    const editSaleItem = !this.state.editSaleItem
    this.setState({editSaleItem})
  };

  toggleAdminView = () => {
    const showAdminView = !this.state.showAdminView
    this.setState({showAdminView})
  };

  handleItemCurrentlyOnSaleChange = (event) => {
    const itemCurrentlyOnSale = event.target.value

    this.setState({itemCurrentlyOnSale})
  };

  addNewProductToProductList = (newProduct) => {
    const productList = [...this.state.productList]

    newProduct.id = productList.length
    productList.push(newProduct)
    this.setState({productList})
  };

  deleteProductFromListById = (productIdToDelete) => {
    const productList = [...this.state.productList]

    const productToDelete = productList.find((product) => {
      return product.id === productIdToDelete
    })
    const indexToDelete = productList.indexOf(productToDelete)
    productList.splice(indexToDelete, 1)

    this.setState({productList})
  };

  addProductToCart = (idToAddToCart) => {
    // First, check to see if a product with the given ID is already in the cart
    const cartList = [...this.state.cartList]
    const productAlreadyInCart = cartList.find((product) => {
      return product.id === idToAddToCart
    })

    // If the product is not in the cart, add it to the cart with a quantity of zero
    // Otherwise, increment the quantity of the one from the cart

    if (!productAlreadyInCart) {
      // first find the product from the product list
      const productFromProductList = this.state.productList.find((product) => {
        return product.id === idToAddToCart
      })
      // then copy that product object
      const product = {...productFromProductList}

      // finally, give the new product a quantity of zero
      product.quantity = 1
      cartList.push(product)
    } else {
      // if the product is already in the cart, increment its quantity by one
      productAlreadyInCart.quantity += 1
    }

    this.setState({cartList})
  };

  removeProductFromCart = (idToDelete) => {
    const cartList = [...this.state.cartList]

    const productToDelete = cartList.find((product) => {
      return product.id === idToDelete
    })
    const indexToRemove = cartList.indexOf(productToDelete)
    cartList.splice(indexToRemove, 1)

    this.setState({cartList})
  };

  render () {
    const adminView = <AdminView
      productList={this.state.productList}
      addNewProductToProductList={this.addNewProductToProductList}
      deleteProductFromListById={this.deleteProductFromListById}/>

    const shopView = <ShopView
      productList={this.state.productList}
      addProductToCart={this.addProductToCart}/>

    return (
      <div>
        <div>
          <div id="home-page-nav">
            <h1>Hardware Store</h1>
            <span>Currently On Sale: {this.state.itemCurrentlyOnSale}!</span>

            <div>
              {
                this.state.editSaleItem ? <div>
                  <input
                    onChange={this.handleItemCurrentlyOnSaleChange}
                    value={this.state.itemCurrentlyOnSale}
                    type="text"
                  />
                </div>
                  : null
              }
            </div>
            <div>
              <button onClick={this.toggleEditSaleItem}>
                {this.state.editSaleItem
                  ? 'Hide'
                  : 'Edit Sale Item'}
              </button>
            </div>
            <div>
              <button onClick={this.toggleAdminView}>
                {this.state.showAdminView
                  ? 'Show Shop View'
                  : 'Show Admin View'}
              </button>
            </div>
          </div>
        </div>

        <div id="view-container">
          {this.state.showAdminView ? adminView : shopView}

          <CartView
            productList={this.state.cartList}
            removeProductFromCart={this.removeProductFromCart}/>
        </div>
      </div>
    )
  }
}

export default HomePage
