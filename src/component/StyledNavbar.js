import React from 'react'
import { NavLink } from 'react-router-dom'

const StyledNavbar = () => {
  return (
    <nav className="container">
        <NavLink className="btn" to="/" style={({isActive})=>{
            return {color : isActive ? "#F27F0C":"#fff"}
        }}>Home</NavLink>
        <NavLink className={({isActive})=>(isActive ? "btn active":"btn")} to="/about">About</NavLink>
        <NavLink className="btn" to="/products">Products</NavLink>
        <NavLink className="btn" to="/login">Login</NavLink>
    </nav>
  )
}

export default StyledNavbar