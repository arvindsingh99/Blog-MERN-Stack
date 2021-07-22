import "./Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try{
        const res = await axios.post("/auth/register", {
            username,
            email,
            password,
        });
        res.data && window.location.replace("/login");
    }catch(err){
        setError(true);
    }
    };
    return (
        <div className="register">
            <form className="registerForm" onSubmit={handleSubmit}>
                <span className="registerTitle">Register Yourself</span>
                <label >Username</label>
                <input type="text" className="registerInput" placeholder="Enetr Your Username ..."
                    onChange={e=>setUsername(e.target.value)}
                />
                <label >Email</label>
                <input type="email" className="registerInput" placeholder="Enetr Your email ..."
                    onChange={e=>setEmail(e.target.value)}
                />
                <label>Password</label>
                <input type="password" className="registerInput" placeholder="Enetr Password"
                    onChange={e=>setPassword(e.target.value)}
                />
                <button className="registerButton" type="submit">
                    Register
                </button>
            </form>
            <button className="registerLoginButton">
                <Link to="/login" className="link">Login</Link>
            </button>
            {error && <span>Something Went Wrong!!</span>}
        </div>
    )
}

export default Register
