import React from 'react'
import './Header.css'
function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img src="https://imsolutions.co.za/wp-content/uploads/2019/06/How-blogs-changed-the-world-1024x585.jpg" width="100%"alt="" className="headerImg" />
        </div>
    )
}

export default Header
