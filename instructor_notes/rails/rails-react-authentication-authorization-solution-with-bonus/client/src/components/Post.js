import React, {Component} from 'react'

import styled, {keyframes} from 'styled-components'
import {fadeOut} from 'react-animations'
import PostForm from "./PostForm";

const fadeOutAnimation = keyframes`${fadeOut}`

const PostWrapper = styled.div`
    width: 80%;
    box-shadow: 2px 2px 10px lightgray;
    display: flex;
    flex-direction: column;
    align-items: center; 
    margin-bottom: 35px;
    padding: 25px 25px;
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
    padding: 0px 30px;
    cursor: pointer;
    
    &:focus {
        outline: none;
    }   
    
    &:hover {
        color: #BA324F;
    }
    
`


class Post extends Component {

    state = {
        fadeOut: false,
        fadeOutTime: 150,
        showEditForm: false
    }

    deletePost = async () => {
        await this.setState({fadeOut: true})
        await setTimeout(
            () => {
                this.props.deletePost(this.props.id)
            },
            this.state.fadeOutTime * .25
        )
    }

    showEditForm = async () => {
        this.setState({showEditForm: true})
    }

    showPostContent = async () => {
        this.setState({showEditForm: false})
    }

    render() {

        const restrictedOptions = (
            <div>
                <OptionButton onClick={this.deletePost}>
                    <i className="fa fa-trash-o" aria-hidden="true"/>
                </OptionButton>
                <OptionButton onClick={this.showEditForm}>
                    <i className="fa fa-pencil-square-o" aria-hidden="true"/>
                </OptionButton>
            </div>
        )

        const postDisplay = (
            <div>
                <div><h2>{this.props.title}</h2></div>
                <div>{this.props.content}</div>

                <PostOptions>
                    {this.props.belongs_to_current_user ? restrictedOptions : null}
                </PostOptions>
            </div>
        )

        const postForm = (
            <PostForm {...this.props} showPostContent={this.showPostContent}/>
        )

        return (
            <PostWrapper fadeOut={this.state.fadeOut} fadeOutTime={this.state.fadeOutTime}>

                { this.state.showEditForm ? postForm : postDisplay }

            </PostWrapper>
        )
    }

}

export default Post