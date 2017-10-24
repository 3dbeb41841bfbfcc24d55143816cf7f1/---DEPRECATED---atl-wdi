import React, { Component } from "react"
import Location from "./Location"
import locationData from "../locationData" 
class LocationList extends Component {
    render(){
        
        const locationComponents = locationData.map((locationComponent) => {
            return(
               <Location 
                    name={locationComponent.name}
                    address={locationComponent.address}
                    phone={locationComponent.phone}
               />
            )
        })
        
        return(
            <div id="locations">
                <h1>Locations:</h1>
                <div className="locations">
                    {locationComponents}
                </div>
            </div>
        )
    }
}

export default LocationList;