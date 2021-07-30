import './Login.css'
import { Link } from "react-router-dom"

import { Context } from "../../context/Context";
import axios from "axios";
import { useContext, useRef } from 'react';
function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login/", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" })
        }
    };
 

    return (
        <div className="login">
            <form className="loginForm" onSubmit={handleSubmit}>
                <span className="loginTitle">Login</span>
                <label >Username</label>
                <input type="text" className="loginInput"
                    placeholder="Enetr Your Username ..."
                    ref={userRef} />
                <label>Password</label>
                <input type="password" className="loginInput"
                    placeholder="Enetr Password"
                    ref={passwordRef}
                />
                <button className="loginButton" type="submit" disabled={isFetching}>
                    Login
                </button>
            </form>
            <button className="loginRegisterButton">
                <Link to="/register" className="link">Register</Link>
            </button>
        </div>
    )
}

export default Login
