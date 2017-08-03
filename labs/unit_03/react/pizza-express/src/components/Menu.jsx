import React, { Component } from 'react';
import MenuItem from './MenuItem';
import menuData from '../pizzaData.js';

class Menu extends Component {
    render() {
        return(
            <div className="menu">
                <h1>Menu</h1>
                <div className="menu-container">
                {menuData.map((menu, i) => {
                    return <MenuItem key={i} menuItem={menu} />
                })}
                </div>
            </div>
        ) 

    }
}

export default Menu;