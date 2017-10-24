import React, { Component } from "react"
import LocationList from "./LocationList"

class Location extends Component{
    render(){
        return(
            <div className="location">
                <div>
                    <p>{this.props.name}</p>
                    <strong>Address:</strong>
                    <p>{this.props.address}</p>
                    <strong>Phone:</strong>
                    <p>{this.props.phone}</p>
                </div>
            </div>
        )
    }
}

export default Location;