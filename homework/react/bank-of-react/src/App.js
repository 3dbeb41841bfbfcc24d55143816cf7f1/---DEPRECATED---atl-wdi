import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import AccountBalance from './components/AccountBalance'
import UserProfile from './components/UserProfile'
import axios from 'axios'

class App extends Component {
  state = {

    user: {
      userName: "JimBob",
      memberSince: 1942,
    },
    debits: [],
    credits: []
  }

  getDebits = () => {
    axios.get("http://localhost:4000/debits")
      .then((response) => {
        console.log(response)
        const debits = response.data;
        this.setState({ debits });
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }
  getCredits = () => {
    axios.get("http://localhost:4000/credits")
      .then((response) => {
        console.log(response)
        const credits = response.data;
        this.setState({ credits });
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }
  componentWillMount() {
    this.getDebits()
    this.getCredits()
  }

  render() {

    const AccountBalanceWrapper = () => {
const totalDebits = this.state.debits.reduce((acc, item) => {
  return item.amount
})
console.log(totalDebits)
    }

    const UserProfileWrapper = () => {
      return (<UserProfile userName={this.state.user.userName} memberSince={this.state.user.memberSince} />)
    }

    const DebitsWrapper = () => {
return (<Debits debits={this.state.debits}/>)
    }

    const CreditsWrapper = () => {
      return(<Credits credits={this.state.credits}/>)

    }
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/account' render={AccountBalanceWrapper} />
          <Route exact path='/user' component={UserProfileWrapper} />
        </Switch>
      </Router>
    );
  }
}

export default App;
