import React from 'react'

const Post = (props) => {
    return (
        <div>
            <div><h2>{props.title}</h2></div>
            <div>{props.content}</div>
        </div>
    )
}

export default Post