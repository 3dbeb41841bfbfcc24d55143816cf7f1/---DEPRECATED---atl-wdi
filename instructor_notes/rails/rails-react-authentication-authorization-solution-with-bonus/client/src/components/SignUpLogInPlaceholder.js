import React from 'react'
import styled from 'styled-components'

const SignUpLogInPlaceholderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: center;
    width: 300px;
    z-index: 3;
`

const SignUpLogInPlaceholder = (props) => {

    const header = props.showLogin ? "Don't have an account?" : "Already have an account?"

    return (
        <SignUpLogInPlaceholderWrapper onClick={props.toggleLogin}>
            <h2>{header}</h2>
            <div>Sign up now to add your secrets.</div>
        </SignUpLogInPlaceholderWrapper>
    )
}

export default SignUpLogInPlaceholder