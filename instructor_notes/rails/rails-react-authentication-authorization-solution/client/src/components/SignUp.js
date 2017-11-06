import React, {Component} from 'react'
import {saveAuthTokens} from '../util/sessionHeaderUtil'
import axios from 'axios'
import styled from 'styled-components'

const SignUpLogInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 300px;
  z-index: 3;
`

const SignUpInput = styled.input`
  padding: 0px 10px;
  height: 30px;
  margin-bottom: 15px;
  border-radius: 2px;
  border: 1px solid lightgray;
  width: 70%;
`

const SignUpFormWrapper = styled.div`
  width: 100%
`

const SignUpButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`

const SignUpButton = styled.button`
  border: none;
  margin: 0px 6px;
  padding: 10px 15px;
  border-radius: 5%;
  text-align: center;
  color: white;
  background-color: #BA324F;
  text-decoration: none;
`

class SignUp extends Component {

    state = {
        email: '',
        password: '',
        password_confirmation: ''
    }

    handleChange = (event) => {
        const newState = {...this.state}
        newState[event.target.name] = event.target.value
        this.setState(newState)
    }

    signUp = async (event) => {
        event.preventDefault()

        try {
            const payload = {
                email: this.state.email,
                password: this.state.password,
                password_confirmation: this.state.password_confirmation
            }
            const response = await axios.post('/auth', payload)

            saveAuthTokens(response.headers)

            this.props.setUserSignedIn()

        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <SignUpLogInWrapper>
                <h1>Sign Up</h1>
                <SignUpFormWrapper>
                    <form>
                        <div>
                            <SignUpInput onChange={this.handleChange}
                                        type="text"
                                        name="email"
                                        placeholder="email"
                                        value={this.state.email}/>
                        </div>
                        <div>
                            <SignUpInput onChange={this.handleChange}
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        value={this.state.password}/>
                        </div>
                        <div>
                            <SignUpInput onChange={this.handleChange}
                                        type="password"
                                        name="password_confirmation"
                                        placeholder="confirm password"
                                        value={this.state.password_confirmation}/>
                        </div>
                    </form>
                </SignUpFormWrapper>
                <SignUpButtonWrapper>
                    <SignUpButton onClick={this.signUp}>Sign Up</SignUpButton>
                </SignUpButtonWrapper>

            </SignUpLogInWrapper>
        )
    }
}

export default SignUp