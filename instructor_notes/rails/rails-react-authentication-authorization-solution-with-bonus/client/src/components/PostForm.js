import React, {Component} from 'react'
import styled from 'styled-components'

const PostFormWrapper = styled.div`
    width: 100%;
`

const TitleInput = styled.input`
    border-radius: 2px;
    font-size: 1.0em;
    font-family: 'Open Sans',sans-serif;
    font-weight: bold;
    text-align: center;
    width: 100%;
    border: none;
    
    &:focus {
        outline: none;
    }
`

const ContentInput = styled.textarea`
    height: 30px;
    margin-bottom: 15px;
    border: none;
    font-family: 'Open Sans',sans-serif;
    height: 70px;
    font-size: 16px;
    text-align: center;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0px;
    
    resize: none;
    
    &:focus {
        outline: none;
    }
`

const UpdateButton = styled.button`
  border: none;
  padding: 10px 15px;
  border-radius: 5%;
  text-align: center;
  color: white;
  background-color: #BA324F;
  text-decoration: none;
  cursor: pointer;
`

class PostForm extends Component {

    state = {
        title: '',
        content: ''
    }

    componentWillMount() {
        this.setState({
            title: this.props.title,
            content: this.props.content
        })
    }

    handleInputChange = (event) => {
        const attributeToChange = event.target.name
        const newValue = event.target.value

        const newState = {...this.state}
        newState[attributeToChange] = newValue
        this.setState(newState)
    }

    editPost = (event) => {
        event.preventDefault()

        this.props.showPostContent()

        this.props.editPost(
            this.props.id,
            this.state.title,
            this.state.content
        )
    }

    moveCaretToEnd = (event) => {
        const tempValue = event.target.value
        event.target.value = ''
        event.target.value = tempValue
    }

    render() {
        return (
            <PostFormWrapper>
                <form>
                    <div>
                        <h2>
                            <TitleInput
                                type="text"
                                name="title"
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                autoFocus
                                onFocus={this.moveCaretToEnd}/>
                        </h2>
                    </div>

                    <div>
                        <ContentInput spellCheck="false" name="content" value={this.state.content} onChange={this.handleInputChange}/>
                    </div>

                    <div>
                        <UpdateButton onClick={this.editPost}>Update</UpdateButton>
                    </div>
                </form>
            </PostFormWrapper>
        )
    }
}

export default PostForm