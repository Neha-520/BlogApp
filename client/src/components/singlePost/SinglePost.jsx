import axios from 'axios';
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';
import './singlePost.css'

export const SinglePost = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get('/posts/' + path);
            setPost(res.data);
        }
        getPost();
    }, [path])

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                    <img
                        className="singlePostImg"
                        src={post.photo}
                        alt=""
                    />
                )}
                <h1 className="singlePostTitle">
                    {post.title}
                    <div className="singlePostEdit">
                        <i class="singlePostIcon zmdi zmdi-edit"></i>
                        <i class="singlePostIcon  zmdi zmdi-delete"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span>
                        Author:
                        <Link className='link' to={`/?user=${post.userName}`}>
                            <b className="singlePostAuthor">
                                {post.userName}
                            </b>
                        </Link>
                    </span>
                    <span>{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="singlePostDesc">
                    {post.desc}
                </p>
            </div>
        </div>
    )
}
