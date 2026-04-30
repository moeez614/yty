import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Dashboard from '../Components/Dashboard'

const Admin = () => {
    return (
        <>
            <div className='admin-dashboard'>
                    <Dashboard />
                    <Outlet />
            </div>
        </>
    )
}

export default Admin
