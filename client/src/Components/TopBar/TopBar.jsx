import React, { useContext } from 'react'
import './TopBar.css'
import { Link } from "react-router-dom"
import { Context } from '../../context/Context';
function TopBar() {
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  }
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-github-square"></i>
        <i className="topIcon fab fa-linkedin"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">Home</Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">About</Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">Contact</Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">Add/Write</Link>
          </li>
          <li className="topListItem">
            <Link to="/login" className="link" onClick={handleLogout}>{user && "Logout"}</Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img src={user.profilePic}
            alt="" className="topImage" />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login" className="link">Login</Link>
            </li>
            <li className="topListItem">
              <Link to="/register" className="link">Register</Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div >
  )
}

export default TopBar
