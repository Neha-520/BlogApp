import { Link } from "react-router-dom";
import "./navbar.css";
import { useContext } from 'react';
import { Context } from './context/Context';

export const NavBar = () => {
    const { user } = useContext(Context);
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon  zmdi zmdi-facebook-box"></i>
                <i className="topIcon  zmdi zmdi-instagram"></i>
                <i className="topIcon  zmdi zmdi-pinterest-box"></i>
                <i className="topIcon  zmdi zmdi-twitter-box"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <Link className="link" to="/">
                        HOME
                    </Link>
                    <li className="topListItem"> ABOUT</li>
                    <li className="topListItem"> CONTACT</li>
                    <li className="topListItem">
                        <Link className="link" to="/write">
                            WRITE
                        </Link>
                    </li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img className="topImage" src="https://www.whatsappimages.in/wp-content/uploads/2021/01/stylish-girl-images-photo-download-300x300.jpg" alt="mypic" />
                <i className="topSearchIcon zmdi zmdi-search"></i>
            </div>
        </div>
    )
}
