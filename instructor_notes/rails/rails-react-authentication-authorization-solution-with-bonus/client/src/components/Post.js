import React, {Component} from 'react'

import styled, {keyframes} from 'styled-components'
import {fadeOut} from 'react-animations'

const fadeOutAnimation = keyframes`${fadeOut}`

const PostWrapper = styled.div`
    width: 80%;
    box-shadow: 2px 2px 10px lightgray;
    display: flex;
    flex-direction: column;
    align-items: center; 
    margin-bottom: 35px;
    padding: 0px 25px;
    text-align: center;
    background: white;
    animation: ${props => {
    return props.fadeOut ? `${props.fadeOutTime}ms ${fadeOutAnimation}` : null
}}
    
`

const PostOptions = styled.div`
    display: flex;
    padding-top: 35px;
    justify-content: center;
`

const OptionButton = styled.button`
    border: none;
    padding: 10px 15px;
    text-align: center;
    text-decoration: none;
    background: white;
    font-size: 20px;
    padding: 25px 30px;
    
    &:focus {
        outline: none;
    }   
    
    &:hover {
        color: #e24626;
    }
`


class Post extends Component {

    state = {
        fadeOut: false,
        fadeOutTime: 150
    }

    deletePost = async () => {
        await this.setState({fadeOut: true})
        await setTimeout(
            () => {this.props.deletePost(this.props.id)},
            this.state.fadeOutTime * .25
        )
    }

    render() {
        return (
                <PostWrapper fadeOut={this.state.fadeOut} fadeOutTime={this.state.fadeOutTime}>

                    <div><h2>{this.props.title}</h2></div>
                    <div>{this.props.content}</div>
                    <PostOptions>
                        <OptionButton onClick={this.deletePost}>
                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                        </OptionButton>
                        <OptionButton>
                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                        </OptionButton>
                    </PostOptions>

                </PostWrapper>
        )
    }

}

export default Post