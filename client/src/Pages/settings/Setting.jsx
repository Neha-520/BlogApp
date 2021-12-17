import { useContext, useState } from 'react'
import { Context } from '../../context/Context';
import { Sidebar } from '../../components/sidebar/Sidebar'
import './setting.css'
import axios from 'axios';

export const Setting = () => {

    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/"

    const [file, setFile] = useState(null);
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE_START" })
        const updatedUser = {
            userId: user._id,
            userName, email, password
        }
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;
            try {
                await axios.put("/upload", data);
            } catch (err) { }
        }
        try {
            const res = await axios.put("/users/" + user._id, updatedUser);
            setSuccess(true);

            dispatch({ type: "UPDATE_SUCCESS", payload: res.data })
        } catch (err) {

            dispatch({ type: "UPDATE_FAILURE" })
        }
    };


    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsTitleUpdate">Update Your Account</span>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img
                            src={file ? URL.createObjectURL(file) : PF + user.profilePic}
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon zmdi zmdi-account-circle zmdi-hc-lg"></i>{" "}
                        </label>
                        <input
                            id="fileInput"
                            type="file"
                            style={{ display: "none" }}
                            onChange={(e) => setFile(e.target.files[0])}
                            className="settingsPPInput"
                        />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder={user.userName} name="name" onChange={(e) => setUserName(e.target.value)} />
                    <label>Email</label>
                    <input type="email" placeholder={user.email} name="email" onChange={(e) => setEmail(e.target.value)} />
                    <label>Password</label>
                    <input type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} />
                    <button className="settingsSubmitButton" type="submit">
                        Update
                    </button>
                    {success && <span style={{ color: "green", textAlign: "center", marginTop: "20px" }}>Profile has been updated 😃</span>}
                </form>

            </div>
            <Sidebar />
        </div>
    )
}
