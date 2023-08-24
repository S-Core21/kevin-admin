import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import BlogForm from '../../components/BlogForms/BlogForm'
import Login from '../Login/Login'
import NavBar from '../../components/NavBar/NavBar'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import TopNav from '../../components/TopNav/TopNav'

const Dashboard = () => {
    const isLogged = localStorage.getItem('logged')

    return (
        <>
            {
                isLogged && <div className='dashboard'>
                    <div className='dNav'>
                        <NavBar />
                    </div>
                    <div className='body'>
                        <TopNav />
                        <Outlet />
                    </div>
                </div>
            }
            {
                !isLogged && <Navigate to='/login' />
            }
        </>


    )
}

export default Dashboard

