import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../component/StyledNavbar'

const SharedLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default SharedLayout