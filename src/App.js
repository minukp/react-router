import React from 'react'
import { useState } from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import SharedLayout from './pages/SharedLayout'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import './App.css'
import SingleProduct from './pages/SingleProduct'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import ProtectedRoute from './pages/ProtectedRoute'

const App = () => {
  const [user,setUser] = useState(null);

  return (
    <BrowserRouter>
    <Routes> 
     <Route path="/" element={<SharedLayout/>}> 
      <Route index  element={<Home/>}/>  
      <Route path="about" element={<About/>}/>
      <Route path="products" element={<Products/>}/>
      <Route path="products/:id" element={<SingleProduct/>}/>
      <Route path="login" element={<Login setUser={setUser}></Login>}/>

      <Route path="dashboard" element={<ProtectedRoute user={user}>
        <Dashboard user={user}/>
      </ProtectedRoute>}/>
    </Route>
    </Routes>    
    </BrowserRouter>
  )
}

export default App