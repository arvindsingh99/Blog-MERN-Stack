import './Login.css'
import { Link } from "react-router-dom"
function Login() {
    return (
        <div className="login">
            <form className="loginForm">
                <span className="loginTitle">Login</span>
                <label >Email</label>
                <input type="email" className="loginInput" placeholder="Enetr Your email ..." />
                <label>Password</label>
                <input type="password" className="loginInput" placeholder="Enetr Password" />
                <button className="loginButton">
                <Link to="/login" className="link">Login</Link>
                </button>
            </form>
            <button className="loginRegisterButton">
            <Link to="/register" className="link">Register</Link>
            </button>
        </div>
    )
}

export default Login
