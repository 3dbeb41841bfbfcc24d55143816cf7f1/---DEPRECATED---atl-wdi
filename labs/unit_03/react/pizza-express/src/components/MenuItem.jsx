import React, {Component} from 'react';


class MenuItem extends Component {
  render() {
    return (
      <div id="menu" className="menu-item">
        <img src={this.props.menuItem.image} />
        <div className="menu-description">
          <div className="menu-item-name">{this.props.menuItem.name}</div>
          <div><strong>Price:</strong>{this.props.menuItem.price}</div>
          <div>{this.props.menuItem.description}</div>
        </div>
      </div>
    );
  }
}

export default MenuItem;