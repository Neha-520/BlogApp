
import './sidebar.css'

export const Sidebar = () => {
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
                    <li className="sidebarListItem">
                        Life
                    </li>
                    <li className="sidebarListItem">
                        Music
                    </li>
                    <li className="sidebarListItem">
                        Sport
                    </li>
                    <li className="sidebarListItem">
                        Style
                    </li>
                    <li className="sidebarListItem">
                        Tech
                    </li>
                    <li className="sidebarListItem">
                        Cinema
                    </li>
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
