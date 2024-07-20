import React from 'react'
import './Header.css'
import logo from '../../assets/img/logo.png'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <div className="containor">
<div className="nav-containor">
    <div className="logo">
        <div className="logo-img">
            <img src={logo} alt="" />
        </div>
        <span className='primaryText'>My Personal Work</span>
    </div>
    <div className="navbar">
        <ul className='menu-bar'>
            <li><Link to='./'>Home</Link></li>
            <li><Link to='./plans'>Services</Link></li>
            <li><Link to='./coures'>Courses</Link></li>
            <li><Link to='./abouts'>About US</Link></li>
        </ul>
    </div>
</div>
            </div>

        </div>

    )
}

export default Header