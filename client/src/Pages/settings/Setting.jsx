import { useContext, useState } from 'react'
import { Context } from '../../context/Context';
import { Sidebar } from '../../components/sidebar/Sidebar'
import './setting.css'

export const Setting = () => {

    const { user } = useContext(Context);
    const [file, setFile] = useState(null);


    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsTitleUpdate">Update Your Account</span>
                    <span className="settingsTitleDelete">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img
                            src={user.profilePic}
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <i class="settingsPPIcon zmdi zmdi-account-circle zmdi-hc-lg"></i>{" "}
                        </label>
                        <input
                            id="fileInput"
                            type="file"
                            style={{ display: "none" }}
                            className="settingsPPInput"
                        />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Safak" name="name" />
                    <label>Email</label>
                    <input type="email" placeholder="safak@gmail.com" name="email" />
                    <label>Password</label>
                    <input type="password" placeholder="Password" name="password" />
                    <button className="settingsSubmitButton" type="submit">
                        Update
                    </button>
                </form>

            </div>
            <Sidebar />
        </div>
    )
}
