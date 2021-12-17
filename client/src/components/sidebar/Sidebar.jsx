import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './sidebar.css'

export const Sidebar = () => {

    const [cats, setCat] = useState([]);

    useEffect(() => {
        const getCat = async () => {
            const res = await axios.get("/categories")
            setCat(res.data);
        }
        getCat();
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPl7omlmtQl1Y9ZSbI8KOXMiLjhIzFqHbE3Q&usqp=CAU" alt=""></img>
                <p>
                    Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
                    amet ex esse.Sunt eu ut nostrud id quis proident.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {
                        cats.map((c, i) => (
                            <Link key={i} className='link' to={`/?cat=${c.name}`}>
                                <li className="sidebarListItem">
                                    {c.name}
                                </li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sideBarIcon  zmdi zmdi-facebook-box"></i>
                    <i className="sideBarIcon  zmdi zmdi-instagram"></i>
                    <i className="sideBarIcon  zmdi zmdi-pinterest-box"></i>
                    <i className="sideBarIcon  zmdi zmdi-twitter-box"></i>
                </div>
            </div>
        </div>
    )
}
