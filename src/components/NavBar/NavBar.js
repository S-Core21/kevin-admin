import React, { useEffect } from 'react'
import { useState } from 'react'
import './NavBar.css'
import { NavLink} from 'react-router-dom'

const NavBar = () => {
    const user = localStorage.getItem('data')
    const [data, setData] = useState(JSON.parse(user))
    const [admin, setAdmin] = useState(true)

    useEffect(()=>{
        if(data.access === 'admin'){
            setAdmin(true)
        }else{
            setAdmin(false)
        }
    },[])
  return (
    <>
    {
        admin && <div className='navbar'>
        <img alt='logo' src='/images/flogo1.png' className='logo' />
        <nav>
            <ul>
            <NavLink to='/' activeclassname = 'active'><li>Dashboard</li></NavLink>
            </ul>
            <p>Blogs</p>
            <ul>
            <NavLink to='/create-blog' activeclassname = 'active' > <li>Create Blog</li></NavLink>
                <NavLink to='/blogs' activeclassname = 'active' ><li>View Blogs</li></NavLink>
            </ul>
            <p>Videos</p>
            <ul>
            <NavLink to='/videos' activeclassname = 'active' > <li>View Videos</li></NavLink>
            <NavLink to='/add-videos' activeclassname = 'active' > <li>Add Videos</li></NavLink>
            </ul>
            <p>Forms</p>
            <ul>
                <NavLink to='/mentorship' activeclassname = 'active' ><li>Mentorships</li></NavLink>
                <NavLink to='/newsletter' activeclassname = 'active' ><li>Newsletter</li></NavLink>
            </ul>
            <p>Users</p>
            <ul>
                <NavLink to='/add-user' activeclassname = 'active' ><li>Add User</li></NavLink>
                <NavLink to='/view-users' activeclassname = 'active' ><li>View Users</li></NavLink>
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
    }
    {
        !admin && <div className='navbar'>
        <img alt='logo' src='/images/logo.png' className='logo' />
        <nav>
            <p>Blogs</p>
            <ul>
            <NavLink to='/create-blog' activeclassname = 'active' > <li>Create Blog</li></NavLink>
                <NavLink to='/blogs' activeclassname = 'active' ><li>View Blogs</li></NavLink>
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
    }
    </>
    
  )
}

export default NavBar