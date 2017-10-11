import React, { Component } from "react"
import Location from "./Location"
import Description from "./Description"
import Contact from "./Contact"
import MenuList from "./MenuList"

class NavBar extends Component {
    render(){
        return(
            <div className="navbar">
                <a href="#description">Our Story</a>
                <a href="#menu">Menu</a>
                <h1>PIZZA-EXPRESS</h1>
                <a href="#locations">Locations</a>
                <a href="#contact">Contact</a>
            </div>
        )
    }
}

export default NavBar;