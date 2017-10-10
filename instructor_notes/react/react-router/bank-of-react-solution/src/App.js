import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import Home from './components/Home'
import LogIn from './components/LogIn'
import UserProfile from './components/UserProfile'
import DebitsPage from './components/DebitsPage'
import CreditsPage from './components/CreditsPage'

import axios from 'axios'

class App extends Component {
  constructor () {
    super()

    this.state = {
      currentUser: {
        userName: 'ejonelunas',
        memberSince: 1995
      },
      debits: [],
      credits: []
    }
  }

  getDebits = () => {
    axios.get('http://localhost:4000/debits').then((response) => {
      const debits = response.data
      this.setState({debits})
    })
  };

  getCredits = () => {
    axios.get('http://localhost:4000/credits').then((response) => {
      const credits = response.data
      this.setState({credits})
    })
  };

  calculateAccountBalance = () => {
    const totalCredits = this.state.credits.reduce((totalCredits, credit) => {
      return totalCredits + credit.amount
    }, 0)

    const totalDebits = this.state.debits.reduce((totalDebits, debit) => {
      return totalDebits + debit.amount
    }, 0)

    return totalCredits - totalDebits
  };

  addNewDebit = (newDebit) => {
    const debits = [...this.state.debits]
    debits.push(newDebit)
    this.setState({debits})
  };

  addNewCredit = (newCredit) => {
    const credits = [...this.state.credits]
    credits.push(newCredit)
    this.setState({credits})
  };

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  componentWillMount () {
    this.getDebits()
    this.getCredits()
  }

  render () {
    const accountBalance = this.calculateAccountBalance()

    const HomeComponent = () => (<Home accountBalance={accountBalance} {...this.props}/>)
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)
    const UserProfileComponent = () => (
      <UserProfile
        userName={this.state.currentUser.userName}
        memberSince={this.state.currentUser.memberSince} {...this.props}/>
    )
    const DebitsPageComponent = () => (
      <DebitsPage
        debits={this.state.debits}
        addNewDebit={this.addNewDebit}
        accountBalance={accountBalance} {...this.props}/>
    )
    const CreditsPageComponent = () => (
      <CreditsPage
        credits={this.state.credits}
        addNewCredit={this.addNewCredit}
        accountBalance={accountBalance} {...this.props}/>
    )

    return (
      <Router>
        <div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/login">Log In</Link>
          </div>
          <Switch>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/debits" render={DebitsPageComponent}/>
            <Route exact path="/credits" render={CreditsPageComponent}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
