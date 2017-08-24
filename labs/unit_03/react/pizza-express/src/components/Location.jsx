import React, { Component } from 'react';

class Location extends Component {
    render() {
        return (
            <div className="location">
            <p>{this.props.location.name}</p>
            <strong>Address: </strong>
            <p>{this.props.location.address}</p>
            <strong>Phone: </strong>
            <p>{this.props.location.phone}</p>
            </div>
        )
    }
}
export default Location