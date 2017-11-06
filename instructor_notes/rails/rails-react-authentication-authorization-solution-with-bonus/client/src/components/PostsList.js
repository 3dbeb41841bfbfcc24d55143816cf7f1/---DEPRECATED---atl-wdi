import React from 'react'
import styled from 'styled-components'
import Post from "./Post";

const PostContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PostsList = (props) => {

    const posts = props.posts.map((post) => {
        return (
            <Post {...post} deletePost={props.deletePost} key={post.id}/>
        )
    })

    return (
        <PostContainerWrapper>
            <h1>Posts</h1>

            {props.posts.length > 0 ? posts : null}
        </PostContainerWrapper>
    )
}

export default PostsList
