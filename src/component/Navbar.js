import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='container'>
        <Link className='btn' to="/">Home</Link>
        <Link className='btn' to="about">About</Link>
        <Link className='btn' to="products">Products</Link>
        <Link className='btn' to="login">Login</Link>
    </nav>
  )
}

export default Navbar