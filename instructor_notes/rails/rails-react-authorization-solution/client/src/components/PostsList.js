import React from 'react'
import Post from "./Post"

const PostsList = (props) => {

    const posts = props.posts.map((post) => {
        return (
            <Post {...post} deletePost={props.deletePost} key={post.id}/>
        )
    })
    return (
        <div>
            <h1>Posts</h1>

            {props.posts.length > 0 ? posts : null}
        </div>
    )
}

export default PostsList