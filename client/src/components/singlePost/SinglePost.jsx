import axios from 'axios';
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react';
import './singlePost.css'
import { Context } from '../../context/Context';

export const SinglePost = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})

    const PF = "http://localhost:5000/images/"
    const { user } = useContext(Context);

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false)

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get('/posts/' + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc)
        }
        getPost();
    }, [path])

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, {
                data: { userName: user.userName }
            })
            window.location.replace("/")
        } catch (err) { }
    }

    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`, {
                userName: user.userName, title, desc
            })
            setUpdateMode(false);
        } catch (err) { }
    }

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                    <img
                        className="singlePostImg"
                        src={PF + post.photo}
                        alt=""
                    />
                )}{
                    updateMode ? (
                        <input autoFocus type="text" onChange={(e) => setTitle(e.target.value)} value={title} className="singlePostTitleInput" />
                    ) : (
                        <h1 className="singlePostTitle">
                            {title}
                            {post.userName === user?.userName &&
                                <div className="singlePostEdit">
                                    <i className="singlePostIcon zmdi zmdi-edit" onClick={() => setUpdateMode(true)}></i>
                                    <i className="singlePostIcon  zmdi zmdi-delete" onClick={handleDelete}></i>
                                </div>
                            }
                        </h1>
                    )
                }
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
                {updateMode ? (
                    <textarea className="singlePostDescInput" value={desc} onChange={(e) => setDesc(e.target.value)} />
                ) : (
                    <p className="singlePostDesc">
                        {desc}
                    </p>
                )
                }
                {updateMode && (
                    <button onClick={handleUpdate} className='singlePostButton'>Update</button>
                )}
            </div>
        </div>
    )
}
