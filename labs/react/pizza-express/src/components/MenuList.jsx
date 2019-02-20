import React, {Component} from 'react'
import MenuItem from './MenuItem.jsx'
import pizzaData from '../pizzaData.js'


class MenuList extends Component {
    render() {
        const menuItem = pizzaData.map((pizza, index) => {
            return <MenuItem
            key = {index}
            image = {pizza.image}
            name = {pizza.name}
            price = {pizza.price}
            description = {pizza.description}
            />
        })
        return (
            <div className="menu">
                <h1>Menu</h1>

                <div className="menu-container">
                    {menuItem}
                    
                </div>
            </div>
        )
    }
}
export default MenuList