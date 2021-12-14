import './register.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';

export const Register = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("/auth/register", {
                userName,
                email,
                password,
            })
            res.data && window.location.replace("/login");
        } catch (err) {
            setError(true);
        }
    }

    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input onChange={e => setUserName(e.target.value)} className="registerInput" type="text" placeholder="Enter your username..." />
                <label>Email</label>
                <input onChange={e => setEmail(e.target.value)} className="registerInput" type="text" placeholder="Enter your email..." />
                <label>Password</label>
                <input onChange={e => setPassword(e.target.value)} className="registerInput" type="password" placeholder="Enter your password..." />
                <button type='submit' className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">
                <Link className="link" to="/login">
                    Login
                </Link>
            </button>
            {error && <span style={{ color: "red", marginTop: "10px" }}>Something went wrong!</span>}
        </div>
    )
}
