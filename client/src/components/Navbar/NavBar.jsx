import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./navbar.css";


export const NavBar = () => {

    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/"

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }

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
                    <li className="topListItem">
                        <Link className="link" to="/">
                            ABOUT
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">
                            CONTACT
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">
                            WRITE
                        </Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link to="/settings">
                        <img className="topImage" src={user.profilePic} alt="" />
                    </Link>) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                )}
                <i className="topSearchIcon zmdi zmdi-search"></i>
            </div>
        </div>
    )
}
