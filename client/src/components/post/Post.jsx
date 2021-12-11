import './Post.css'

export const Post = () => {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWPRAgRmS5JyPmmKC7h5M3Y1zgN21GWQpChA&usqp=CAU"
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet
                </span>
                <hr />
                <span className="postDate">1 hr ago</span>
                <p className="postDesc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                    officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                    fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                    atque, exercitationem quibusdam, reiciendis odio laboriosam?
                </p>
            </div>
        </div>
    )
}
