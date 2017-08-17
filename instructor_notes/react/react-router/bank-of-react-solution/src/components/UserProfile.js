import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class UserProfile extends Component {
    render() {
        return (
            <div>
                <h1>User Profile</h1>

                <div>Username: {this.props.userName}</div>
                <div>Member Since: {this.props.memberSince}</div>

                <Link to="/">Home</Link>
            </div>
        );
    }
}

export default UserProfile;