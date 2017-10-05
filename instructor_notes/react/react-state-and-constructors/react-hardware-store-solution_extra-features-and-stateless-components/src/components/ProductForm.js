import React, {Component} from 'react'

class ProductForm extends Component {
  constructor (props) {
    super(props)

    this.defaultState = {
      newProduct: {
        productName: '',
        description: '',
        price: 0.00
      }
    }

    this.state = this.defaultState
  }

  handleNewProductChange = (event) => {
    const attributeName = event.target.name
    const attributeValue = event.target.value

    const newProduct = {...this.state.newProduct}
    newProduct[attributeName] = attributeValue

    this.setState({newProduct})
  };

  resetProductForm = () => {
    this.setState(this.defaultState)
  };

  addNewProduct = (event) => {
    event.preventDefault()

    this.props.addNewProductToProductList(this.state.newProduct)

    this.resetProductForm()
  };

  render () {
    return (
      <div>
        <form onSubmit={this.addNewProduct}>
          <div>
            <input name="productName"
              type="text"
              placeholder="Name"
              value={this.state.newProduct.productName}
              onChange={this.handleNewProductChange}
            />
          </div>
          <div>
            <input name="description"
              type="text"
              placeholder="Description"
              onChange={this.handleNewProductChange}
              value={this.state.newProduct.description}/>
          </div>
          <div>
            <input name="price"
              type="number"
              min="0.00"
              step="0.01"
              placeholder="Price (USD)"
              onChange={this.handleNewProductChange}
              value={this.state.newProduct.price}/>
          </div>
          <div><input type="submit" value="Create New Product"/></div>
        </form>
      </div>
    )

  }
}

export default ProductForm
