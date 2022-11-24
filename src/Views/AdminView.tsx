import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

function AdminView() {
  return (
    <>
        <Navbar />
        <section className='__navbar-admin-container container' >
            <div className='__navbar-admin-wrapper container'>
                <nav className='__navbar-admin-links'>
                    <NavLink end to={'create-product'} className={({ isActive }) => (isActive ? '__navbar-admin-link-active' : '__navbar-admin-link')}>Create Product</NavLink>
                    <NavLink end to={'view-comments'} className={({ isActive }) => (isActive ? '__navbar-admin-link-active' : '__navbar-admin-link')} >View Comments</NavLink>
                    <NavLink end to={'view-users'} className={({ isActive }) => (isActive ? '__navbar-admin-link-active' : '__navbar-admin-link')} >View Users</NavLink>
                    <NavLink end to='/admin' className={({ isActive }) => (isActive ? '__navbar-admin-link-active' : '__navbar-admin-link')} ></NavLink>
                </nav>
            </div>
        </section>
        <Outlet />
        <Footer />
    </>
  )
}

export default AdminView