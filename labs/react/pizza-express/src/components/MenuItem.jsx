import React, { Component } from 'react'

class MenuItem extends Component {
    render() {
        return (
            <div className="menu-item" id="menu">
                <img src={this.props.image} alt="pizza" />
                <div className="menu-description">
                <div className="menu-item-name"> {this.props.name}</div>
                    <div><strong>Price</strong>{this.props.price}</div>
                    <p>{this.props.description}</p></div>


                
            </div>
        )
    }
}

export default MenuItem