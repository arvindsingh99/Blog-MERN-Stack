import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './SinglePost.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];

    const [post, setPost] = useState({});
    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            setPost(res.data)
        };
        getPost()
    }, [path]);
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                { post.photo &&
                    (<img src="{post.photo}"
                        alt="" className="singlePostImg" />
                    )
                }
                <h1 className="singlePostTitle">
                    {post.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon fas fa-trash"></i>
                    </div>
                </h1>

                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>
                        <Link to={`/?user=${post.username}`} className="link">  
                        {post.username}
                        </Link>
                         </b></span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="singlePostDesc">
                    {post.desc}
                </p>

            </div >
        </div >
    )
}

export default SinglePost
