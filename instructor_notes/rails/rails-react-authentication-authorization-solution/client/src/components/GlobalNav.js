import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const GlobalNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 18px;
  box-shadow: 0 4px 10px -2px lightgray;
  margin-bottom: 35px;
  background-color: #175676;
`

const GlobalNavLogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

const GlobalNavLogo = styled.img`
  height: 30px;
  border-radius: 10%
`

const GlobalNavHeader = styled.span`
  margin-left: 15px;
  text-align: center;
  font-size: 30px;
  color: white;
  font-family: 'Oswald', sans-serif;
`

const SessionButtonWrapper = styled.div`
`

const SessionButton = styled.button`
  border: none;
  padding: 10px 15px;
  border-radius: 5%;
  text-align: center;
  color: white;
  background-color: #4BA3C3;
  text-decoration: none;
`

const GlobalNav = (props) => {

  const signOut = async (event) => {
    event.preventDefault()

    try {
      await axios.delete('/auth/sign_out')
      localStorage.clear()

      props.signOut()

    } catch (error) {
      console.log(error)
    }
  }

  const signOutButton =
    <SessionButton onClick={signOut}><a>Sign Out</a></SessionButton>

  const signInButton =
    <Link to="/signUp" style={{'textDecoration': 'none'}}>
      <SessionButton>Log In</SessionButton>
    </Link>

  return (
    <GlobalNavWrapper>

      <GlobalNavLogoWrapper>
        <div>
          <GlobalNavLogo
            src="https://upload.wikimedia.org/wikipedia/commons/4/40/Bremen_Key_mark_%28white_background%29.svg"
            alt="Secret Logo"/>
          <GlobalNavHeader>Secrets</GlobalNavHeader>
        </div>
      </GlobalNavLogoWrapper>

      <SessionButtonWrapper>
        {props.signedIn ? signOutButton : signInButton}
      </SessionButtonWrapper>

    </GlobalNavWrapper>
  )
}

export default GlobalNav
