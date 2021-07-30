import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './SinglePost.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import { useContext } from 'react';
function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});

    const PF = "http://localhost:5000/images/";
    const { user } = useContext(Context);

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        };
        getPost()
    }, [path]);

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, { data: { username: user.username } });
            window.location.replace("/");
        } catch (err) { }

    }
    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`, {
                username: user.username,
                title,
                desc,
            });
            window.location.reload();
        } catch (err) {}

    }
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo &&
                    (<img src={PF + post.photo}
                        alt="" className="singlePostImg" />
                    )
                }
                {updateMode ? <input
                    type="text"
                    value={title}
                    className="singlePostTitleInput"
                    autoFocus
                    onChange={(e) => setTitle(e.target.value)}
                /> : (
                    <h1 className="singlePostTitle">
                        {post.title}
                        {
                            post.username === user?.username && (
                                <div className="singlePostEdit">
                                    <i className="singlePostIcon far fa-edit" onClick={() => setUpdateMode(true)}></i>
                                    <i className="singlePostIcon fas fa-trash" onClick={handleDelete}></i>
                                </div>
                            )}
                    </h1>
                )}


                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>
                        <Link to={`/?user=${post.username}`} className="link">
                            {post.username}
                        </Link>
                    </b></span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode ? <textarea
                    type="text"
                    value={desc}
                    className="singlePostDescInput"
                    autoFocus
                    onChange={(e) => setDesc(e.target.value)}
                /> : (
                    <p className="singlePostDesc">
                        {post.desc}
                    </p>
                )}
                <button className="singlePostButton" onClick={handleUpdate}>Update</button>
            </div >
        </div >
    )
}

export default SinglePost
