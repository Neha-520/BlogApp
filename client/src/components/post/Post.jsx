import './Post.css'
import { Link } from 'react-router-dom'

export const Post = ({ post }) => {
    return (
        <div className="post">
            {post.photo && (
                <img
                    className="postImg"
                    src={post.photo}
                    alt=""
                />
            )}
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map((c, i) => (
                        <span key={i} className='postCat'>{c.name}</span>
                    ))}
                </div>
                <Link className='link' to={`/post/${post._id}`}>
                    <span className="postTitle">
                        {post.title}
                    </span>
                </Link>
                <hr />
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
                <p className="postDesc">
                    {post.desc}
                </p>
            </div>
        </div>
    )
}
