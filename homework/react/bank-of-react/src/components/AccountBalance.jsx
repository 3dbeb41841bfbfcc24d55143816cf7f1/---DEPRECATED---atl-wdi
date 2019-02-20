import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'


class AccountBalance extends Component {
    state = {
        redirectToHome: false
    }
    saveSomething = () => {
        console.log('Clicked')

        setTimeout(() => {
            this.setState({ redirectToHome: true })
        }, 1500)
    }


    render() {
        if (this.state.redirectToHome) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <span><strong>Your Balance is: $</strong></span>
                <strong>{this.props.accountBalance}</strong>
                <button onClick={this.saveSomething}>Redirect Button</button>
                <br />
                <Link to="/user">User Profile</Link>
            </div>
        )
    }
}


export default AccountBalance