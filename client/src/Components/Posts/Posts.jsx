import React from 'react'
import './Posts.css'
import Post from '../Post/Post'
function posts({ posts }) {
    return (
        <div className="posts">
            {posts.map((p) => (
                <Post post={p} />
            ))}

        </div>
    )
}

export default posts
