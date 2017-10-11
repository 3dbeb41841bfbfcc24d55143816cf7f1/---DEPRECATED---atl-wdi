import React, { Component } from "react"
import MenuList from "./MenuList"

class MenuItem extends Component {
    render(){
        return(
            
                <div id="menu" className="menu-item">                
                    <div>
                        <img src={this.props.img} />
                    </div>
                    <div className="menu-description">
                        <div className="menu-item-name">
                            {this.props.name}
                        </div>

                        <div>
                            <strong>{this.props.price}</strong>
                        </div>

                        <div>
                            {this.props.description}
                        </div>
                    </div>
                </div>
            
        )
    }
}

export default MenuItem;