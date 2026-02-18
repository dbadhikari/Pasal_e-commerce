import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gray-100 p-5 flex justify-center gap-10'>
        <NavLink to='/' className={({isActive})=>`${isActive ? "text-green-500":""}`}>Home</NavLink>
        <NavLink to='/product' className={({isActive})=>`${isActive ? "text-green-500":""}`}>Product</NavLink>
        <NavLink to='/blog' className={({isActive})=>`${isActive ? "text-green-500":""}`}>Blog</NavLink>
        <NavLink to='/login' className={({isActive})=>`${isActive ? "text-green-500":""}`}>Login</NavLink>
        <NavLink to='/select' className={({isActive})=>`${isActive ? "text-green-500":""}`}>Register</NavLink>
    </div>
  )
}

export default Navbar