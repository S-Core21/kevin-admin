import React from 'react'
import './NavBar.css'
import { Link, NavLink, NavNavLink, Navigate } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
        <img alt='logo' src='/images/logo.png' className='logo' />
        <nav>
            <ul>
            <NavLink to='/' activeclassname = 'active'><li>Dashboard</li></NavLink>
            </ul>
            <p>Blogs</p>
            <ul>
            <NavLink to='/create-blog' activeclassname = 'active' > <li>Create Blog</li></NavLink>
                <NavLink to='/blogs' activeclassname = 'active' ><li>View Blogs</li></NavLink>
            </ul>
            <p>Forms</p>
            <ul>
                <NavLink to='' activeclassname = 'active' ><li>Mentorships</li></NavLink>
                <NavLink to='' activeclassname = 'active' ><li>Newsletter</li></NavLink>
            </ul>
            <p>Logout</p>
            <ul>
                <NavLink to='/login'>
                <li onClick={()=>{
                    localStorage.removeItem('logged')
                }}>Logout</li>
                </NavLink>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar