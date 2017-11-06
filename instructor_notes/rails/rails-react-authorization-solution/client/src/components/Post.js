import React from 'react'

const Post = (props) => {

    const deletePost = () => {
        props.deletePost(props.id)
    }

    return (
        <div>
            <div><h2>{props.title}</h2></div>
            <div>{props.content}</div>

            <div>
                <button onClick={deletePost}>Delete</button>
            </div>
        </div>
    )
}

export default Post