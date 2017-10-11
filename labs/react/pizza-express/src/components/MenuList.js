import React, { Component } from "react"
import MenuItem from "./MenuItem"
import menuData from "../pizzaData.js"
class MenuList extends Component{
    render() {
        const menuComponents = menuData.map((menuItem) => {
          return(
            <MenuItem
                img={menuItem.image}
                name={menuItem.name}
                price={menuItem.price}
                description={menuItem.description}
            />           
          )
        })
        return(
            <div className="menu">
                <h1>Menu</h1>
                <div className="menu-container">
            
                        {menuComponents}
                    
                </div>
            </div>
        )    
    }
}

export default MenuList;