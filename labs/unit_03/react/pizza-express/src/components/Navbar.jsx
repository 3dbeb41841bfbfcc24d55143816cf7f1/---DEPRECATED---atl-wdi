import React, {Component} from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
      <a href="#splash-image">Our Story</a>
      <a href="#menu">Menu</a>
      <h1>PIZZA-EXPRESS</h1>
      <a href="#locations">Locations</a>
      <a href="#contact">Contact</a>
      </div>
    );
  }
}

export default Navbar;